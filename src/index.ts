
import { loadImage, createEventManager, setTransition } from './lib';
import { ConfigVM, EventEnum } from './view-models';


export {
  ConfigVM,
  EventEnum,
};

/**
 * Helper function to extract the coordinates from an event, whether the
 * event is a mouse or touch.
 */
const getEventCoords = (ev: MouseEvent | TouchEvent) => {

  if (!!(ev as TouchEvent).changedTouches) {
    const { pageX, pageY } = (ev as TouchEvent).changedTouches[0];
    return {
      pageX,
      pageY,
    };
  } else {
    const { pageX, pageY } = ev as MouseEvent;
    return {
      pageX,
      pageY,
    };
  }
};

/**
 * Helper function to get the local coords of an event in an element.
 *
 * @param elem element in question
 * @param ev the event
 */
const getLocalCoords = (elem: HTMLCanvasElement, coords: { pageX: number, pageY: number }) => {
  const { pageX, pageY } = coords;
  const parentHTML = elem.offsetParent as HTMLElement;
  const left = parentHTML?.offsetLeft;
  const top = parentHTML?.offsetTop;
  return {
    x: pageX - left,
    y: pageY - top,
  };
};

export const createScratchcardGame = (config: ConfigVM) => {
  const { el, backImgSrc, lineWidth = 40, hideDuration = 400 } = config;
  const $el: HTMLElement = document.querySelector(el);

  const { addEventListener, removeEventListener, dispatchEvent } = createEventManager();

  let mouseDown = false;
  let isFresh = true;
  let img: HTMLImageElement;
  let isFinish = false;

  const $canvas = document.createElement('canvas');


  const init = async (): Promise<void> => {
    $el.style.visibility = 'hidden';
    $el.draggable = false;
    $el.style.userSelect = 'none';
    $el.style.position = 'relative';
    $canvas.draggable = false;
    $canvas.style.userSelect = 'none';
    $canvas.style.position = 'absolute';
    $canvas.style.top = '0';
    $canvas.style.left = '0';
    setTransition($canvas, `opacity ${hideDuration / 1000}s`)

    img = await loadImage(backImgSrc);
    dispatchEvent(EventEnum.ImageLoaded);

    recompositeCanvases();

    bindEvent();

    $el.append($canvas);
    $el.style.visibility = 'visible';
    dispatchEvent(EventEnum.Init);
  };

  const onMouseMovie = (e: MouseEvent | TouchEvent) => {
    if (!mouseDown) {
      return true;
    }
    const { x, y } = getLocalCoords($canvas, getEventCoords(e));
    scratchLine(x, y);

    return false;
  };

  const onMouseDown = () => {
    mouseDown = true;
  }

  const onMouseUp = () => {
    mouseDown = false;
    isFresh = true;
  }
  const bindEvent = () => {
    document.addEventListener('mousemove', onMouseMovie);
    document.addEventListener('touchmove', onMouseMovie);
    document.addEventListener('touchstart', onMouseDown);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('mouseup', onMouseUp);
  };
  const unBindEvent = () => {
    document.removeEventListener('mousemove', onMouseMovie);
    document.removeEventListener('touchmove', onMouseMovie);
    document.removeEventListener('touchstart', onMouseDown);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('touchend', onMouseUp);
    document.removeEventListener('mouseup', onMouseUp);
  }

  const recompositeCanvases = () => {
    $canvas.width = $el.clientWidth;
    $canvas.height = $el.clientHeight;
    // console.log($el.clientWidth, $el.clientHeight)

    const ctx = $canvas.getContext('2d');
    ctx.globalCompositeOperation = 'copy';
    ctx.drawImage(img, 0, 0, $canvas.width, $canvas.height);
    ctx.globalCompositeOperation = 'destination-out';
  };

  const scratchLine = (x: number, y: number) => {
    if (isFinish) return;

    const ctx = $canvas.getContext('2d');

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = 'rgba(0,0,0,1)'; // can be any opaque color
    if (isFresh) {
      ctx.beginPath();
      isFresh = false;
      // this +0.01 hackishly causes Linux Chrome to draw a
      // "zero"-length line (a single point), otherwise it doesn't
      // draw when the mouse is clicked but not moved:
      ctx.moveTo(x + 0.01, y);
    }
    ctx.lineTo(x, y);
    ctx.stroke();

    dispatchEvent(EventEnum.Scratch);
    if (scratchedPercentage() >= 100) {
      finish();
    }
  };

  const reset = () => {
    isFresh = true;
    isFinish = false;
    $canvas.style.opacity = '1';
    recompositeCanvases();
  };

  const supportsCanvas = () => {
    return !!document.createElement('canvas').getContext;
  };

  /**
   * 已經刮掉了幾％
   *
   * By adjusting the stride, you get a less accurate result, but it is
   * quicker to compute (pixels are skipped)
   *
   * @param stride [optional] pixel step value, default 1
   *
   * @return the fraction the canvas has been scratched (0.0 -> 1.0)
   */
  const scratchedPercentage = (stride: number = 1): number => {
    if (stride < 1) {
      stride = 1;
    }

    stride *= 4; // 4 elements per pixel

    const ctx = $canvas.getContext('2d');
    const pixels = ctx.getImageData(0, 0, $canvas.width, $canvas.height);
    const pdata = pixels.data;
    const l = pdata.length; // 4 entries per pixel
    // tslint:disable-next-line: no-bitwise
    const total = (l / stride) | 0;
    let count = 0;

    for (let i = 0; i < l; i += stride) {
      if (pdata[i] !== 0) {
        count++;
      }
    }

    return 100 - Math.floor((count / total) * 100);
  };

  const finish = () => {
    isFinish = true;

    $canvas.style.opacity = '1';
    $canvas.style.opacity = '0';

    dispatchEvent(EventEnum.Finish);
  };

  const destroy = () => {
    $canvas.remove();
    unBindEvent();
  }

  init();

  return {
    $el,
    reset,
    finish,
    destroy,
    scratchedPercentage,
    supportsCanvas,
    addEventListener,
    removeEventListener,
  };
};

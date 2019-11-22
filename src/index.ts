import 'regenerator-runtime/runtime';
import $ from 'jquery';

import { loadImage, createEventManager } from './lib';
import { ConfigVM, EventEnum } from './view-models';


export {
  ConfigVM,
  EventEnum,
};

type JQueryMouseMoveEvent = JQuery.MouseMoveEvent<Document, undefined, Document, Document>;
type JQueryTouchMoveEvent = JQuery.TouchMoveEvent<Document, undefined, Document, Document>;
type jQueryTriggeredEvent = JQuery.TriggeredEvent<Document, undefined, Document, Document>;

/**
 * Helper function to extract the coordinates from an event, whether the
 * event is a mouse or touch.
 */
const getEventCoords = (ev: JQueryMouseMoveEvent | JQueryTouchMoveEvent | jQueryTriggeredEvent): { pageX: number, pageY: number } => {
  const origEv = ev.originalEvent; // get from jQuery

  if (!!(origEv as TouchEvent).changedTouches) {
    const { pageX, pageY } = (origEv as TouchEvent).changedTouches[0];
    return {
      pageX,
      pageY,
    };
  } else {
    const { pageX, pageY } = ev;
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
  const { left, top } = $(elem).offset();
  return {
    x: pageX - left,
    y: pageY - top,
  };
};

export const createScratchcardGame = (config: ConfigVM) => {
  const { el, contentHtml, backImgSrc, lineWidth = 40 } = config;
  const $el: JQuery<HTMLElement> = $(el);

  const { addEventListener, removeEventListener, dispatchEvent } = createEventManager();

  let mouseDown = false;
  let isFresh = true;
  let img: HTMLImageElement;
  let isFinish = false;

  const canvas = document.createElement('canvas');
  const $canvas = $(canvas);


  const init = async (): Promise<void> => {
    $el.hide();
    $el.html(contentHtml);
    $el.css({
      position: 'relative',
    });
    $canvas.css({
      position: 'absolute',
      top: 0,
      left: 0,
    });

    img = await loadImage(backImgSrc);
    dispatchEvent(EventEnum.ImageLoaded);

    recompositeCanvases();

    bindEvent();

    $el.append(canvas);
    $el.show();
    dispatchEvent(EventEnum.Init);
  };

  const bindEvent = () => {
    const onMouseMovie = (e: JQueryMouseMoveEvent | JQueryTouchMoveEvent | jQueryTriggeredEvent) => {
      if (!mouseDown) {
        return true;
      }
      const { x, y } = getLocalCoords(canvas, getEventCoords(e));
      scratchLine(x, y);

      return false;
    };

    $(document).on('mousemove', onMouseMovie);
    $(document).on('touchmove', onMouseMovie);
    $(document).on('touchstart mousedown', (e) => {
      mouseDown = true;
    });
    $(document).on('touchstart mousedown', onMouseMovie);
    $(document).on('touchend mouseup', () => {
      mouseDown = false;
      isFresh = true;
    });
  };

  const recompositeCanvases = () => {
    canvas.width = $el.width();
    canvas.height = $el.height();

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'copy';
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'destination-out';
  };

  const scratchLine = (x: number, y: number) => {
    if (isFinish) return;

    const ctx = canvas.getContext('2d');

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
    $canvas.show();
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

    const ctx = canvas.getContext('2d');
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
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
    $canvas.fadeOut();
    dispatchEvent(EventEnum.Finish);
  };

  init();

  return {
    $el,
    reset,
    finish,
    scratchedPercentage,
    supportsCanvas,
    addEventListener,
    removeEventListener,
  };
};

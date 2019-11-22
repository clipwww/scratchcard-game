import { createScratchcardGame, EventEnum } from '../src/index';

const { finish, reset, scratchedPercentage, addEventListener } = createScratchcardGame({
  el: '#app',
  contentHtml: `
    <img src="https://www.myre.life/images/newIndex/img-welcomeLin.png" />
  `,
  backImgSrc: './images/img-scratch-top.png',
});

window['reset'] = reset;


addEventListener(EventEnum.Scratch, () => {
  if (scratchedPercentage() > 70) {
    finish();
  }
});


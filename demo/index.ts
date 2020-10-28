import 'regenerator-runtime/runtime';

import { createScratchcardGame, EventEnum } from '../src/index';


const { finish, reset, destroy, scratchedPercentage, addEventListener } = createScratchcardGame({
  el: '#app',
  backImgSrc: './images/img-scratch-top.png',
});



addEventListener(EventEnum.Scratch, () => {
  const percentage = scratchedPercentage();
  document.getElementById('js-text').innerText = `刮開 ${percentage}% 了`
  if (percentage > 70) {
    finish();
  }
});

window.addEventListener('resize', reset);
document.getElementById('js-finish').addEventListener('click', finish);
document.getElementById('js-reset').addEventListener('click', reset)
document.getElementById('js-destroy').addEventListener('click', destroy)
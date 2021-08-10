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

function init() {
  reset();
  document.getElementById('js-text').innerText = '';
}

window.addEventListener('resize', init);
document.getElementById('js-finish').addEventListener('click', finish);
document.getElementById('js-reset').addEventListener('click', init)
document.getElementById('js-destroy').addEventListener('click', destroy)
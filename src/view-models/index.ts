export enum EventEnum {
  Init = 'init',
  ImageLoaded = 'imageLoaded',
  Scratch = 'scratch',
  Finish = 'finish',
}

export interface ConfigVM {
  el: string;
  backImgSrc: string;
  lineWidth?: number;
  hideDuration?: number;
}

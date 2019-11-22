export enum EventEnum {
  Init = 'init',
  ImageLoaded = 'imageLoaded',
  Scratch = 'scratch',
  Finish = 'finish',
}

export interface ConfigVM {
  el: string;
  contentHtml: string;
  backImgSrc: string;
  lineWidth?: number;
}

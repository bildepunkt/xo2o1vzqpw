import Config from "./Config";

export interface IDOM {
  document: Document | any;
  canvas: HTMLCanvasElement | any;
  context: CanvasRenderingContext2D | any;
  window: Window | any;
}

export class DOMMock implements IDOM {
  public document: any;
  public canvas: any;
  public context: any;
  public window: any;
}

export default class DOM implements IDOM {
  public document: Document = document;
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public window: Window = window;

  constructor(canvas: HTMLCanvasElement, config:Config) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    this.canvas.width = config.resolution.width * config.bpp;
    this.canvas.height = config.resolution.height * config.bpp;
    this.context.imageSmoothingEnabled = false;
    this.context.imageSmoothingQuality = "low";
  }
}

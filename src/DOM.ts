import Config from "./Config";

export default class DOM {
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

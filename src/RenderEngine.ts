import Config from "./Config";
import DOM from "./DOM";

export interface IRenderEngine {
  renderBixel:(x:number, y:number, colourValue:string) => void;
}

export default class RenderEngine implements IRenderEngine {
  private config:Config;
  private dom:DOM;

  constructor (config:Config, dom:DOM) {
    this.config = config;
    this.dom = dom;
  }

  public clear ():void {
    const { bpp, resolution } = this.config;
    this.dom.context.clearRect(0, 0, resolution.width * bpp, resolution.height * bpp);
  }

  public renderBixel (x:number, y:number, colourValue:string):void {
    const { bpp } = this.config;
    this.dom.context.fillStyle = colourValue;
    this.dom.context.fillRect(
      Math.floor(x) * bpp,
      Math.floor(y) * bpp,
      bpp,
      bpp
    );
  }
}

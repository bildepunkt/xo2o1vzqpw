import Config from "./Config";
import DOM from "./DOM";
import Colour from "./Colour";

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

  public clear (fill?:Colour):void {
    const { bpp, resolution } = this.config;
    const { context } = this.dom;
    context.clearRect(0, 0, resolution.width * bpp, resolution.height * bpp);

    if (fill) {
      context.fillStyle = fill.value;
      context.fillRect(0, 0, resolution.width * bpp, resolution.height * bpp);
    }
  }

  public renderBixel (x:number, y:number, colourValue:string):void {
    const { bpp } = this.config;
    const { context } = this.dom;
    context.fillStyle = colourValue;
    context.fillRect(
      Math.floor(x) * bpp,
      Math.floor(y) * bpp,
      bpp,
      bpp
    );
  }
}

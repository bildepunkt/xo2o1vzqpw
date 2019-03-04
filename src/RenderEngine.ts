import Config from "./Config";
import { IDOM } from "./DOM";

export default class RenderEngine {
  private config:Config;
  private dom:IDOM;

  constructor(config:Config, dom:IDOM) {
    this.config = config;
    this.dom = dom;
  }

  public renderBixel = (x:number, y:number, colourValue:string):void => {
    const bpp = this.config.bpp;
    this.dom.context.fillStyle = colourValue;
    this.dom.context.fillRect(
      Math.floor(x * bpp),
      Math.floor(y * bpp),
      bpp,
      bpp
    );
  }
}

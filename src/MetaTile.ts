import { Rectangle } from "./Geometry";
import IRenderable from "./IRenderable";
import { IRenderEngine } from "./RenderEngine";

export default class MetaTile implements IRenderable {
  render (parentX:number, parentY:number, renderEngine:IRenderEngine):void {
    // TODO implement
  }

  public get boundingBox ():Rectangle {
    return new Rectangle(); // TODO implement
  }
}

import { Rectangle } from "./Geometry";
import { IRenderEngine } from "./RenderEngine";

export default interface IRenderable {
  boundingBox:Rectangle;
  render:(parentX:number, parentY:number, renderEngine:IRenderEngine) => void;
}
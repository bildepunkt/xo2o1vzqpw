import { IRenderEngine } from "./RenderEngine";

export default interface IRenderable {
  render:(parentX:number, parentY:number, renderEngine:IRenderEngine) => void;
}
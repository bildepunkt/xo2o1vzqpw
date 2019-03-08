import { IRenderEngine } from "./RenderEngine";

// TODO implement
export default interface MetaTile {
  render:(parentX:number, parentY:number, renderEngine:IRenderEngine) => void;
}

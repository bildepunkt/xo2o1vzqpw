import Colour from "./Colour";
import { Point, Rectangle } from "./Geometry";
import IRenderable from "./IRenderable";
import { IRenderEngine } from "./RenderEngine";

export interface TextOpts {
  color?:Colour;
  size?:number;
  spacing?:Point;
  value?:string;
  widthMax?:number;
}

export interface TextPrivates {
  color:Colour;
  size:number;
  spacing:Point;
  value:string;
  widthMax:number;
}

export default class Text implements IRenderable {
  private static defaults:TextPrivates = {
    color: null,
    size: 1,
    spacing: new Point(1, 1),
    value: "",
    widthMax: undefined
  }
  private privates:TextPrivates;

  constructor (opts:TextOpts = {}) {
    this.privates = Object.assign({}, Text.defaults, opts);
  }

  public render (parentX:number, parentY:number, renderEngine:IRenderEngine):void {
    // TODO implement
  }

  public get boundingBox ():Rectangle {
    return new Rectangle(); // TODO implement
  }
}

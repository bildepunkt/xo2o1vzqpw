import IRenderable from "./IRenderable";
import { IRenderEngine } from "./RenderEngine";

export interface SpriteOpts {
  opacity?:number;
  renderable?:IRenderable;
  x?:number;
  y?:number;
}

export interface SpritePrivates {
  id:number;
  opacity:number;
  renderable:IRenderable;
  x:number;
  y:number;
}

export default class Sprite {
  private static idCounter:number = 0;
  private static defaults:SpritePrivates = {
    id: null,
    opacity: 1,
    renderable: null,
    x: 0,
    y: 0
  };
  private privates:SpritePrivates;

  constructor (opts:SpriteOpts = {}) {
    this.privates = Object.assign({}, Sprite.defaults, opts);
    this.privates.id = ++Sprite.idCounter;
  }

  public render (renderEngine:IRenderEngine):void {
    this.privates.renderable.render(this.privates.x, this.privates.y, renderEngine);
  }

  public get id ():number {
    return this.privates.id;
  }
}

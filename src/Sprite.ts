import MetaTile from "./MetaTile";
import { IRenderEngine } from "./RenderEngine";
import Tile from "./Tile";

export interface SpriteOpts {
  metaTile?:MetaTile;
  opacity?:number;
  tile?:Tile;
  x?:number;
  y?:number;
}

export interface SpritePrivates {
  id:number;
  metaTile:MetaTile;
  opacity:number;
  tile:Tile;
  x:number;
  y:number;
}

export default class Sprite {
  private static idCounter:number = 0;
  private static defaults:SpritePrivates = {
    id: null,
    metaTile: null,
    opacity: 1,
    tile: null,
    x: 0,
    y: 0
  };
  private privates:SpritePrivates;

  constructor (opts:SpriteOpts = {}) {
    this.privates = Object.assign({}, Sprite.defaults, opts);
    this.privates.id = ++Sprite.idCounter;
  }

  public render (renderEngine:IRenderEngine):void {
    if (this.privates.metaTile) {
      this.privates.metaTile.render(this.privates.x, this.privates.y, renderEngine);
    }
    if (this.privates.tile) {
      this.privates.tile.render(this.privates.x, this.privates.y, renderEngine);
    }
  }

  public get id ():number {
    return this.privates.id;
  }
}

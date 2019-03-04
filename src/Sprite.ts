import Colour from "./Colour";
import { IRenderEngine } from "./RenderEngine";

export type SpriteMap = Array<Colour[]>;
export type SpriteRotation = 0 | 90 | 180 | 270;

export interface SpriteOpts {
  flipX?:boolean;
  flipY?:boolean;
  map?:SpriteMap;
  rotation?:SpriteRotation;
}

export interface SpritePrivates {
  flipX:boolean;
  flipY:boolean;
  map:SpriteMap;
  mapOriginal:SpriteMap;
  rotation:SpriteRotation;
}

export default class Sprite {
  private static defaults:SpritePrivates = {
    flipX: false,
    flipY: false,
    map: [],
    mapOriginal: [],
    rotation: 0
  };
  private privates:SpritePrivates;

  constructor (opts:SpriteOpts = {}) {
    this.privates = Object.assign({}, Sprite.defaults, opts);
    this.privates.mapOriginal = this.cloneMap();
  }

  public cloneMap ():SpriteMap {
    return this.privates.map.map((row:Colour[]) => row.map(index => index));
  }

  public cloneMapOriginal ():SpriteMap {
    return this.privates.mapOriginal.map((row:Colour[]) => row.map(index => index));
  }

  public render (renderEngine:IRenderEngine):void {
    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        renderEngine.renderBixel(x, y, this.map[y][x].value);
      }
    }
  }

  public get map ():SpriteMap {
    return this.privates.map;
  }

  public get flipX ():boolean {
    return this.privates.flipX;
  }

  public get flipY ():boolean {
    return this.privates.flipY;
  }

  public get rotation ():SpriteRotation {
    return this.privates.rotation;
  }

  public set map (value:SpriteMap) {
    this.privates.map = value;
    this.privates.mapOriginal = value;
  }

  public set flipX (value:boolean) {
    if (value !== this.privates.flipX) {
      for (let row of this.privates.map) {
        row = row.reverse();
      }
      this.privates.flipX = value;
    }
  }

  public set flipY (value:boolean) {
    if (value !== this.privates.flipY) {
      this.privates.map = this.privates.map.reverse();
      this.privates.flipY = value;
    }
  }

  public set rotation (value:SpriteRotation) {
    if (value !== this.privates.rotation) {
      let map = this.cloneMapOriginal();
      if (this.privates.flipX) {
        for (let row of map) {
          row = row.reverse();
        }
      }
      if (this.privates.flipY) {
        map = map.reverse();
      }
      switch (value) {
        case 0:
          this.privates.map = map;
          break;
        case 90:
          const mapRotated90:SpriteMap = [];
          for (let x = 0; x < map[0].length; x++) {
            let row:Colour[] = [];
            for (let y = 0; y < map.length; y++) {
              row.push(map[y][x]);
            }
            mapRotated90.push(row.reverse());
          }
          this.privates.map = mapRotated90;
          break;
        case 180:
          for (let row of map) {
            row = row.reverse();
          }
          this.privates.map = map.reverse();
          break;
        case 270:
          const mapRotated270:SpriteMap = [];
          for (let x = 0; x < map[0].length; x++) {
            let row:Colour[] = [];
            for (let y = 0; y < map.length; y++) {
              row.push(map[y][x]);
            }
            mapRotated270.push(row);
          }
          this.privates.map = mapRotated270.reverse();
          break;
      }
      this.privates.rotation = value;
    }
  }
}

export type SpriteMap = Array<number[]>;

export interface SpriteOpts {
  map?:SpriteMap;
  flipX?:boolean;
  flipY?:boolean;
}

export class Sprite {
  private static defaults:SpriteOpts = {
    map: [],
    flipX: false,
    flipY: false
  };
  public map:SpriteMap;
  public flipX:boolean;
  public flipY:boolean;

  constructor (opts:SpriteOpts) {
    opts = Object.assign({}, Sprite.defaults, opts);
    this.map = opts.map;
    this.flipX = opts.flipX;
    this.flipY = opts.flipY;
  }

  public cloneMap ():SpriteMap {
    return this.map.map((row:number[]) => row.map(index => index));
  }
}

type SpriteMap = Array<number[]>;

interface SpriteOpts {
  map?:SpriteMap;
  flipX?:boolean;
  flipY?:boolean;
}

class Sprite {
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

const render = (sprite:Sprite):void => {
  let map:SpriteMap = sprite.cloneMap();

  if (sprite.flipX) {
    for (let row of map) {
      row = row.reverse();
    }
  }

  if (sprite.flipY) {
    map = map.reverse();
  }

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      console.log(map[y][x]);
    }
  }
};

render(new Sprite({
  map: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ],
  flipX: true,
  flipY: true
}));

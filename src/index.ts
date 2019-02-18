import { Sprite, SpriteMap } from "./Sprite";

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

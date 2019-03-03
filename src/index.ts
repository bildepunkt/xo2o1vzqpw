import { Sprite } from "./Sprite";

export const render = (sprite:Sprite):void => {
  for (let y = 0; y < sprite.map.length; y++) {
    for (let x = 0; x < sprite.map[y].length; x++) {
      console.log(sprite.map[y][x]);
    }
  }
};

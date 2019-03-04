import { Sprite } from "../../src/Sprite";
import { Colour } from "../../src/Color";

export const renderBixel = (context:CanvasRenderingContext2D, x:number, y:number, colourValue:string, bpp:number):void => {
  context.fillStyle = colourValue;
  context.fillRect(Math.floor(x * bpp), Math.floor(y * bpp), bpp, bpp);
}

export const renderSprite = (sprite:Sprite, context:CanvasRenderingContext2D):void => {
  for (let y = 0; y < sprite.map.length; y++) {
    for (let x = 0; x < sprite.map[y].length; x++) {
      renderBixel(context, x, y, sprite.map[y][x].value, 16);
    }
  }
};

const r = new Colour(255, 0, 0);
const g = new Colour(0, 255, 0);
const b = new Colour(0, 0, 255);
const canvas:HTMLCanvasElement = document.querySelector("canvas");
const context:CanvasRenderingContext2D = canvas.getContext("2d");

renderSprite(new Sprite({
  map: [
    [r, g, b],
    [b, r, g],
    [g, b, r]
  ]
}), context);

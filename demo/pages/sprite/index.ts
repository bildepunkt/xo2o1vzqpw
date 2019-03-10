import Tile from "../../../src/Tile";
import Colour from "../../../src/Colour";
import RenderEngine from "../../../src/RenderEngine";
import DOM from "../../../src/DOM";
import Config from "../../../src/Config";
import Sprite from "../../../src/Sprite";

const canvas:HTMLCanvasElement = document.querySelector("canvas");
const config:Config = {
  bpp: 16,
  resolution: {
    width: 12,
    height: 3
  }
};
const dom:DOM = new DOM(canvas, config);
const renderEngine:RenderEngine = new RenderEngine(config, dom);
const r:Colour = new Colour(255, 0, 0);
const g:Colour = new Colour(0, 255, 0);
const b:Colour = new Colour(0, 0, 255);

const game = {
  movingRight: true,
  speed: 0.1,
  sprite: new Sprite({
    renderable: new Tile({
      map: [
        [r, g, b],
        [b, r, g],
        [g, b, r]
      ]
    })
  })
};
const render = ():void => {
  game.sprite.x = game.movingRight ? game.sprite.x + game.speed : game.sprite.x - game.speed;

  renderEngine.clear();
  game.sprite.render(renderEngine);
  requestAnimationFrame(render);
}

render();

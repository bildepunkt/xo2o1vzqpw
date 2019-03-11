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

const player = {
  isMovingRight: true,
  speed: 0.2,
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
  let spriteBB = player.sprite.boundingBox;
  if (player.isMovingRight && spriteBB.x + spriteBB.width >= config.resolution.width) {
    player.isMovingRight = false;
  } else if (!player.isMovingRight && spriteBB.x <= 0) {
    player.isMovingRight = true;
  }
 
  player.sprite.x = player.isMovingRight
    ? player.sprite.x + player.speed
    : player.sprite.x - player.speed;

  spriteBB = player.sprite.boundingBox;
  if (spriteBB.x + spriteBB.width > config.resolution.width) {
    player.sprite.x = config.resolution.width - spriteBB.width;
  } else if (spriteBB.x < 0) {
    player.sprite.x = 0;
  }

  renderEngine.clear();
  player.sprite.render(renderEngine);
  requestAnimationFrame(render);
}

render();

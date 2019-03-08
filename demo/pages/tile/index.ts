import Tile from "../../../src/Tile";
import Colour from "../../../src/Colour";
import RenderEngine from "../../../src/RenderEngine";
import DOM from "../../../src/DOM";
import Config from "../../../src/Config";

const canvas:HTMLCanvasElement = document.querySelector("canvas");
const config:Config = {
  bpp: 16,
  resolution: {
    width: 3,
    height: 3
  }
};
const dom:DOM = new DOM(canvas, config);
const renderEngine:RenderEngine = new RenderEngine(config, dom);
const r:Colour = new Colour(255, 0, 0);
const g:Colour = new Colour(0, 255, 0);
const b:Colour = new Colour(0, 0, 255);
const tile:Tile = new Tile({
  map: [
    [r, g, b],
    [b, r, g],
    [g, b, r]
  ]
});

tile.render(0, 0, renderEngine);

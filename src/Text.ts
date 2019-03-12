import Colour from "./Colour";
import Font, { Character } from "./Font";
import { Point, Rectangle } from "./Geometry";
import IRenderable from "./IRenderable";
import { IRenderEngine } from "./RenderEngine";

export type Justify = "LEFT" | "RIGHT" | "CENTER";

export interface TextOpts {
  colour?:Colour;
  font?:Font;
  justify?:Justify;
  spacing?:Point;
  value?:string;
  widthMax?:number;
}

export interface TextPrivates {
  colour:Colour;
  font?:Font;
  justify:Justify;
  spacing:Point;
  value:string;
  widthMax:number;
}

export default class Text implements IRenderable {
  private static defaults:TextPrivates = {
    colour: null,
    font: null,
    justify: "LEFT",
    spacing: new Point(1, 1),
    value: "",
    widthMax: null
  }
  private privates:TextPrivates;

  constructor (opts:TextOpts = {}) {
    this.privates = Object.assign({}, Text.defaults, opts);
  }

  private getLines (words:string[]):Array<Character[]> {
    const lines:Array<Character[]> = [];
    let line:Character[] = [];
    let lineWidth = 0;
    for (const word of words) {
      for (const stringChar of word) {
        const char:Character = this.font.characters[stringChar];
        line.push(char);
        lineWidth += char.width + char.offsetX + this.spacing.x;
      }
      if (this.widthMax && lineWidth > this.widthMax) {
        const lastWord:Character[] = line.splice(line.length - word.length, word.length);
        lines.push(line);
        line = lastWord;
        lineWidth = 0;
        lastWord.forEach((char:Character) => lineWidth += char.width + char.offsetX + this.spacing.x);
      }
      line.push(this.font.characters[" "]);
    }
    lines.push(line);
    return lines;
  }

  private renderLine (lineX:number, lineY:number, line:Character[], renderEngine:IRenderEngine):void {
    let charX = 0;
    for (const char of line) {
      for (let y = 0; y < char.map.length; y++) {
        for (let x = 0; x < char.map[y].length; x++) {
          if (char.map[y][x]) {
            renderEngine.renderBixel(lineX + charX + x, lineY + char.offsetY + y, this.colour.value);
          }
        }
      }
      charX += char.width + char.offsetX + this.spacing.x;
    }
  }

  public render (parentX:number, parentY:number, renderEngine:IRenderEngine):void {
    const lines:Array<Character[]> = this.getLines(this.privates.value.split(" "));
    let lineY:number = 0;
    for (const line of lines) {
      this.renderLine(parentX, parentY + lineY, line, renderEngine);
      lineY += this.font.charHeight + this.spacing.y;
    }
  }

  public get boundingBox ():Rectangle {
    return new Rectangle(); // TODO implement
  }

  public get colour ():Colour {
    return this.privates.colour;
  }

  public get font ():Font {
    return this.privates.font;
  }

  public get spacing ():Point {
    return this.privates.spacing;
  }

  public get value ():string {
    return this.privates.value;
  }

  public get widthMax ():number {
    return this.privates.widthMax;
  }

  public set colour (value:Colour) {
    this.privates.colour = value;
  }

  public set font (value:Font) {
    this.privates.font = value;
  }

  public set spacing (value:Point) {
    this.privates.spacing = value;
  }

  public set value (value:string) {
    this.privates.value = value;
  }

  public set widthMax (value:number) {
    this.privates.widthMax = value;
  }
}

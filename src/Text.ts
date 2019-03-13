import Colour from "./Colour";
import Font, { Character } from "./Font";
import { Point, Rectangle } from "./Geometry";
import IRenderable from "./IRenderable";
import { IRenderEngine } from "./RenderEngine";

export type Justify = "LEFT" | "RIGHT" | "CENTER";

export class Line {
  public characters:Character[];
  public width:number;

  constructor (characters:Character[]=[], width:number=0) {
    this.characters = characters;
    this.width = width;
  }
}

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
  };
  private privates:TextPrivates;

  constructor (opts:TextOpts = {}) {
    this.privates = Object.assign({}, Text.defaults, opts);
  }

  private getLines (words:string[]):Line[] {
    const lines:Line[] = [];
    let line:Line = new Line();
    for (const word of words) {
      for (const stringChar of word) {
        const char:Character = this.font.characters[stringChar];
        line.characters.push(char);
        line.width += char.width + char.offsetX + this.spacing.x;
      }
      if (this.widthMax && line.width > this.widthMax) {
        const lastWord:Character[] = line.characters.splice(line.characters.length - word.length, word.length);
        lines.push(line);
        line = new Line(lastWord);
        lastWord.forEach((char:Character) => line.width += char.width + char.offsetX + this.spacing.x);
      }
      const spaceChar:Character = this.font.characters[" "];
      line.characters.push(spaceChar);
      line.width += spaceChar.width + spaceChar.offsetX + this.spacing.x;
    }
    const spaceChar:Character = line.characters.pop();
    line.width -= spaceChar.width + spaceChar.offsetX + this.spacing.x;
    lines.push(line);
    return lines;
  }

  private renderLine (lineX:number, lineY:number, line:Line, renderEngine:IRenderEngine):void {
    let charX:number = 0;

    switch (this.privates.justify) {
      case "RIGHT":
        lineX -= line.width;
        break;
      case "CENTER":
        lineX -= line.width / 2;
        break;
    }

    for (const char of line.characters) {
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
    const lines:Line[] = this.getLines(this.privates.value.split(" "));
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

  public get justify ():Justify {
    return this.privates.justify;
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

  public set justify (value:Justify) {
    this.privates.justify = value;
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

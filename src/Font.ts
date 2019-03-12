export class Character {
  public map: Array<number>[];
  public offsetX: number;
  public offsetY: number;

  constructor(map:Array<number>[], offsetX:number = 0, offsetY:number = 0) {
    this.map = map;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  public get width ():number {
    return this.map[0].length;
  }
}

export default class Font {
  public characters:{[key:string]:Character};
  public charHeight:number;

  constructor(characters: { [key:string]:Character }, charHeight:number) {
    this.characters = characters;
    this.charHeight = charHeight;
  }
}

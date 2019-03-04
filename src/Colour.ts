export default class Colour {
  private r:number;
  private g:number;
  private b:number;
  private a:number;

  constructor (r:number=0, g:number=0, b:number=0, a:number=1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  public get value ():string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
}

export class Palette {
  public colours:{[key:string]:Colour};

  constructor (colours:{[key:string]:Colour}) {
    this.colours = colours;
  }
}

export class Colour {
  public r:number;
  public g:number;
  public b:number;
  public a:number;

  constructor (r:number=0, g:number=0, b:number=0, a:number=1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

export class Palette {
  public colours:{[key:string]:Colour};

  constructor (colours:{[key:string]:Colour}) {
    this.colours = colours;
  }
}

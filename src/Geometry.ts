export class Point {
  public x:number = 0;
  public y:number = 0;

  constructor (x:number=0, y:number=0) {
    this.x = x;
    this.y = y;
  }
}

export class Rectangle {
  public x:number = 0;
  public y:number = 0;
  public width:number = 0;
  public height:number = 0;

  constructor (x:number=0, y:number=0, width:number=0, height:number=0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export class RectOffset {
  public bottom:number;
  public left:number;
  public right:number;
  public top:number;

  constructor(top:number=0, right:number=0, bottom:number=0, left:number=0) {
    this.bottom = bottom;
    this.left = left;
    this.right = right;
    this.top = top;
  }
}

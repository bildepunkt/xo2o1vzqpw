import { Sprite, SpriteMap } from "../src/Sprite";
import { Colour } from "../src/Color";

describe("Sprite", () => {
  let map:SpriteMap;

  const a = new Colour(1, 1, 1);
  const b = new Colour(2, 2, 2);
  const c = new Colour(3, 3, 3);
  const d = new Colour(4, 4, 4);
  const e = new Colour(5, 5, 5);
  const f = new Colour(6, 6, 6);
  const g = new Colour(7, 7, 7);
  const h = new Colour(8, 8, 8);
  const i = new Colour(9, 9, 9);

  beforeEach(() => {
    map = [
      [a, b, c],
      [d, e, f],
      [g, h, i]
    ];
  })

  describe("constructor()", () => {
    it("instantiates with correct defaults", () => {
      const sprite = new Sprite();
      expect(sprite.flipX).toBe(false);
      expect(sprite.flipY).toBe(false);
      expect(sprite.map).toEqual([]);
      expect(sprite.rotation).toEqual(0);
    });
  });

  describe("flipX", () => {
    it("reverses rows if the new value is not equal to the old value", () => {
      const sprite = new Sprite({ map });
      sprite.flipX = true;
      expect(sprite.map).toEqual([
        [c, b, a],
        [f, e, d],
        [i, h, g]
      ]);
    });
    it("doesn not reverse rows if the new value is equal to the old value", () => {
      const sprite = new Sprite({ map });
      sprite.flipX = false;
      expect(sprite.map).toEqual([
        [a, b, c],
        [d, e, f],
        [g, h, i]
      ]);
    });
  });

  describe("flipY", () => {
    it("reverses columns if the new value is not equal to the old value", () => {
      const sprite = new Sprite({ map });
      sprite.flipY = true;
      expect(sprite.map).toEqual([
        [g, h, i],
        [d, e, f],
        [a, b, c]
      ]);
    });
    it("doesn not reverse columns if the new value is equal to the old value", () => {
      const sprite = new Sprite({ map });
      sprite.flipY = false;
      expect(sprite.map).toEqual([
        [a, b, c],
        [d, e, f],
        [g, h, i]
      ]);
    });
  });

  describe("rotation", () => {
    it("resets the array to 0 degrees", () => {
      const sprite = new Sprite({ map });
      sprite.rotation = 90;
      sprite.rotation = 0;
      expect(sprite.map).toEqual([
        [a, b, c],
        [d, e, f],
        [g, h, i]
      ]);
    });
    it("rotates the array 90 degrees clock-wise", () => {
      const sprite = new Sprite({ map });
      sprite.rotation = 90;
      expect(sprite.map).toEqual([
        [g, d, a],
        [h, e, b],
        [i, f, c]
      ]);
    });
    it("rotates the array 180 degrees clock-wise", () => {
      const sprite = new Sprite({ map });
      sprite.rotation = 180;
      expect(sprite.map).toEqual([
        [i, h, g],
        [f, e, d],
        [c, b, a]
      ]);
    });
    it("rotates the array 270 degrees clock-wise", () => {
      const sprite = new Sprite({ map });
      sprite.rotation = 270;
      expect(sprite.map).toEqual([
        [c, f, i],
        [b, e, h],
        [a, d, g]
      ]);
    });
    it("rotates the array 90 degrees clock-wise and keeps flipX", () => {
      const sprite = new Sprite({ map });
      sprite.flipX = true;
      sprite.rotation = 90;
      expect(sprite.map).toEqual([
        [i, f, c],
        [h, e, b],
        [g, d, a]
      ]);
    });
    it("rotates the array 90 degrees clock-wise and keeps flipY", () => {
      const sprite = new Sprite({ map });
      sprite.flipY = true;
      sprite.rotation = 90;
      expect(sprite.map).toEqual([
        [a, d, g],
        [b, e, h],
        [c, f, i]
      ]);
    });
  });
});

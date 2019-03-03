import { Sprite, SpriteMap } from "../src/Sprite";

describe("Sprite", () => {
  let map:SpriteMap;

  beforeEach(() => {
    map = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
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
        [3, 2, 1],
        [6, 5, 4],
        [9, 8, 7]
      ]);
    });
    it("doesn not reverse rows if the new value is equal to the old value", () => {
      const sprite = new Sprite({ map });
      sprite.flipX = false;
      expect(sprite.map).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]);
    });
  });

  describe("flipY", () => {
    it("reverses columns if the new value is not equal to the old value", () => {
      const sprite = new Sprite({ map });
      sprite.flipY = true;
      expect(sprite.map).toEqual([
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3]
      ]);
    });
    it("doesn not reverse columns if the new value is equal to the old value", () => {
      const sprite = new Sprite({ map });
      sprite.flipY = false;
      expect(sprite.map).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]);
    });
  });

  describe("rotation", () => {
    it("resets the array to 0 degrees", () => {
      const sprite = new Sprite({ map });
      sprite.rotation = 90;
      sprite.rotation = 0;
      expect(sprite.map).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]);
    });
    it("rotates the array 90 degrees clock-wise", () => {
      const sprite = new Sprite({ map });
      sprite.rotation = 90;
      expect(sprite.map).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ]);
    });
    it("rotates the array 180 degrees clock-wise", () => {
      const sprite = new Sprite({ map });
      sprite.rotation = 180;
      expect(sprite.map).toEqual([
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
      ]);
    });
    it("rotates the array 270 degrees clock-wise", () => {
      const sprite = new Sprite({ map });
      sprite.rotation = 270;
      expect(sprite.map).toEqual([
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7]
      ]);
    });
    it("rotates the array 90 degrees clock-wise and keeps flipX", () => {
      const sprite = new Sprite({ map });
      sprite.flipX = true;
      sprite.rotation = 90;
      expect(sprite.map).toEqual([
        [9, 6, 3],
        [8, 5, 2],
        [7, 4, 1]
      ]);
    });
    it("rotates the array 90 degrees clock-wise and keeps flipY", () => {
      const sprite = new Sprite({ map });
      sprite.flipY = true;
      sprite.rotation = 90;
      expect(sprite.map).toEqual([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9]
      ]);
    });
  });
});

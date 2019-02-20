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
    it("doesn not flip columns if the new value is equal to the old value", () => {
      const sprite = new Sprite({ map });
      sprite.flipY = false;
      expect(sprite.map).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]);
    });
  });
});

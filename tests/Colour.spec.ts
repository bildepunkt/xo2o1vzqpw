import Colour from "../src/Colour";

describe("Colour", () => {
  describe("constructor()", () => {
    it("assigns correct defaults", () => {
      const black = new Colour();
      expect(black.value).toEqual("rgba(0, 0, 0, 1)");
    });
  });
  describe("value", () => {
    it("returns correctly formatted colour representation", () => {
      const red = new Colour(255);
      const semiOpaqueBlue = new Colour(0, 0, 255, 0.4);
      expect(red.value).toEqual("rgba(255, 0, 0, 1)");
      expect(semiOpaqueBlue.value).toEqual("rgba(0, 0, 255, 0.4)");
    });
  });
});

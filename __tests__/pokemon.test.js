const Pokemon = require("../pokemon");

describe("Pokemon", () => {
  describe("Properties", () => {
    test("should return default when no arg passed", () => {
      const testPokemon = new Pokemon("evee", undefined, 55, 18, "headbutt");
      const expected = {
        name: "evee",
        type: "normal",
        hitPoints: 55,
        attackDamage: 18,
        move: "headbutt",
      };
      expect(testPokemon).toEqual(expected);
    });
  });
  describe("Methods", () => {
    test("isEffectiveAgainst should return boolean value", () => {
      const flareon = new Pokemon("flareon", "fire", 65, 20, "fire blast");
      const evee = new Pokemon("evee", "normal", 55, 18, "headbutt");
      const vaporeon = new Pokemon("vaporeon", "water", 70, 19, "hydro pump");
      expect(evee.isEffectiveAgainst(flareon)).toBe(false);
    });
    test("isWeakto should return boolean value", () => {
      const flareon = new Pokemon("flareon", "fire", 65, 20, "fire blast");
      const evee = new Pokemon("evee", "normal", 55, 18, "headbutt");
      const vaporeon = new Pokemon("vaporeon", "water", 70, 19, "hydro pump");
      expect(evee.isWeakTo(flareon)).toBe(true);
    });
    test("takeDamage should return rem hitPoint when a num is passed", () => {
      const flareon = new Pokemon("flareon", "fire", 65, 20, "fire blast");
      const evee = new Pokemon("evee", "normal", 55, 18, "headbutt");
      expect(flareon.hitPoints).toBe(65);
      flareon.takeDamage(15);
      expect(flareon.hitPoints).toBe(50);
    });
  });
});

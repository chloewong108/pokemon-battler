const {
  Pokemon,
  Fire,
  Grass,
  Water,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../pokemon");

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
    test("should return the attackDamage of the pokemon", () => {
      const flareon = new Pokemon("flareon", "fire", 65, 20, "fire blast");
      expect(flareon.useMove()).toBe(20);
    });
    test("should return a boolean based on the hitPoints value ", () => {
      const flareon = new Pokemon("flareon", "fire", 0, 20, "fire blast");
      expect(flareon.hasFainted()).toBe(true);
    });
  });
  describe("Classes", () => {
    test.only("should true if pokemon of the fire type isEffective against grass type", () => {
      const fire = new Fire("flareon", "fire", 0, 20, "fire blast");
      console.log(fire);
      const grass = new Grass("leafeon", "grass", 65, 17, "giga drain");
      expect(fire.isEffectiveAgainst(grass)).toBe(true);
    });
    test("should return true if pokemon of fire isWeak against water type pokemon", () => {
      const fire = new Fire("flareon", "fire", 0, 20, "fire blast");
      const water = new Water("vaporeon", "water", 70, 19, "hydro pump");
      expect(fire.isWeakTo(water)).toBe(true);
    });
    test("should return true if grass type isEffective against water", () => {
      const grass = new Grass("leafeon", "grass", 65, 17, "giga drain");
      const water = new Water("vaporeon", "water", 70, 19, "hydro pump");
      expect(grass.isEffectiveAgainst(water)).toBe(true);
    });
    test("should return true if pokemon of grass isWeak against fire", () => {
      const grass = new Grass("leafeon", "grass", 65, 17, "giga drain");
      const fire = new Fire("flareon", "fire", 0, 20, "fire blast");
      expect(grass.isWeakTo(fire)).toBe(true);
    });
    test("should return true if pokemon of water isEffective against fire", () => {
      const water = new Water("vaporeon", "water", 70, 19, "hydro pump");
      const fire = new Fire("flareon", "fire", 0, 20, "fire blast");
      expect(water.isEffectiveAgainst(fire)).toBe(true);
    });
    test("should return true if water pokemon isWeak against grass type", () => {
      const water = new Water("vaporeon", "water", 70, 19, "hydro pump");
      const grass = new Grass("leafeon", "grass", 65, 17, "giga drain");
      expect(water.isWeakTo(grass)).toBe(true);
    });
    test("should ", () => {
      const charmander = new Charmander(44, 17);
      const expected = {
        name: "charmander",
        type: "fire",
        hitPoints: 44,
        attackDamage: 17,
        move: "ember",
      };
      expect(charmander).toEqual(expected);
    });
  });
});

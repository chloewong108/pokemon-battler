const {
  Pokemon,
  Fire,
  Grass,
  Water,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeballs,
} = require("../pokemon");

describe("Pokemon", () => {
  describe("Properties", () => {
    test("should return default when no arg passed", () => {
      const testPokemon = new Pokemon("evee", 55, 18, "headbutt");
      const expected = {
        name: "evee",
        hitPoints: 55,
        attackDamage: 18,
        move: "headbutt",
        type: "normal",
      };
      console.log(testPokemon);
      expect(testPokemon).toEqual(expected);
    });
  });
  describe("Methods", () => {
    test("isEffectiveAgainst should return boolean value", () => {
      const flareon = new Pokemon("flareon", 65, 20, "fire blast", "fire");
      const evee = new Pokemon("evee", 55, 18, "headbutt", "normal");
      const vaporeon = new Pokemon("vaporeon", 70, 19, "hydro pump", "water");
      expect(evee.isEffectiveAgainst(flareon)).toBe(false);
    });
    test("isWeakto should return boolean value", () => {
      const flareon = new Pokemon("flareon", 65, 20, "fire blast", "fire");
      const evee = new Pokemon("evee", 55, 18, "headbutt", "normal");
      const vaporeon = new Pokemon("vaporeon", 70, 19, "hydro pump", "water");
      expect(evee.isWeakTo(flareon)).toBe(true);
    });
    test("takeDamage should return rem hitPoint when a num is passed", () => {
      const flareon = new Pokemon("flareon", 65, 20, "fire blast", "fire");
      const evee = new Pokemon("evee", "normal", 55, 18, "headbutt");
      expect(flareon.hitPoints).toBe(65);
      flareon.takeDamage(15);
      expect(flareon.hitPoints).toBe(50);
    });
    test("should return the attackDamage of the pokemon", () => {
      const flareon = new Pokemon("flareon", 65, 20, "fire blast", "fire");
      expect(flareon.useMove()).toBe(20);
    });
    test("should return a boolean based on the hitPoints value ", () => {
      const flareon = new Pokemon("flareon", 65, 20, "fire blast", "fire");
      expect(flareon.hasFainted()).toBe(false);
    });
  });
  describe("Classes", () => {
    test("should return true if pokemon of the fire type isEffective against grass type", () => {
      const fire = new Fire("flareon", 65, 20, "fire blast", "fire");
      const grass = new Grass("leafeon", 65, 17, "giga drain", "grass");
      expect(fire.isEffectiveAgainst(grass)).toBe(true);
    });
    test("should return true if pokemon of fire isWeak against water type pokemon", () => {
      const fire = new Fire("flareon", 65, 20, "fire blast", "fire");
      const water = new Water("vaporeon", 70, 19, "hydro pump", "water");
      expect(fire.isWeakTo(water)).toBe(true);
    });
    test("should return true if grass type isEffective against water", () => {
      const grass = new Grass("leafeon", 65, 17, "giga drain", "grass");
      const water = new Water("vaporeon", 70, 19, "hydro pump", "water");
      expect(grass.isEffectiveAgainst(water)).toBe(true);
    });
    test("should return true if pokemon of grass isWeak against fire", () => {
      const grass = new Grass("leafeon", 65, 17, "giga drain", "grass");
      const fire = new Fire("flareon", 65, 20, "fire blast", "fire");
      expect(grass.isWeakTo(fire)).toBe(true);
    });
    test("should return true if pokemon of water isEffective against fire", () => {
      const water = new Water("vaporeon", 70, 19, "hydro pump", "water");
      const fire = new Fire("flareon", 65, 20, "fire blast", "fire");
      expect(water.isEffectiveAgainst(fire)).toBe(true);
    });
    test("should return true if water pokemon isWeak against grass type", () => {
      const water = new Water("vaporeon", 70, 19, "hydro pump", "water");
      const grass = new Grass("leafeon", 65, 17, "giga drain", "grass");
      expect(water.isWeakTo(grass)).toBe(true);
    });
    test("the class charmander should return the move ember", () => {
      const charmander = new Charmander(44, 17);
      const expected = {
        name: "charmander",
        hitPoints: 44,
        attackDamage: 17,
        move: "ember",
        type: "fire",
      };
      expect(charmander).toEqual(expected);
    });
    test("the class squirtle should return the move water gun", () => {
      const squirtle = new Squirtle(44, 16);
      const expected = {
        name: "squirtle",
        hitPoints: 44,
        attackDamage: 16,
        move: "water gun",
        type: "water",
      };
      expect(squirtle).toEqual(expected);
    });
    test("the class bulbasaur should return the move vine whip", () => {
      const bulbasaur = new Bulbasaur(45, 16);
      const expected = {
        name: "bulbasaur",
        hitPoints: 45,
        attackDamage: 16,
        move: "vine whip",
        type: "grass",
      };
      expect(bulbasaur).toEqual(expected);
    });
    test("the class rattata should return the move tackle", () => {
      const rattata = new Rattata(50, 16);
      const expected = {
        name: "rattata",
        hitPoints: 50,
        attackDamage: 16,
        move: "tackle",
        type: "normal",
      };
      expect(rattata).toEqual(expected);
    });
  });
});
describe("Pokeballs", () => {
  describe("Methods", () => {
    test("throw method should return ", () => {});
  });
});

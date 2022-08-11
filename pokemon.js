class Pokemon {
  constructor(name, type = "normal", hitPoints, attackDamage, move = "tackle") {
    (this.name = name),
      (this.type = type),
      (this.hitPoints = hitPoints),
      (this.attackDamage = attackDamage),
      (this.move = move);
  }
  isEffectiveAgainst() {
    if (this.type === "normal") {
      return false;
    }
  }

  isWeakTo() {
    if (this.type === "normal") {
      return true;
    }
  }
  takeDamage(num) {
    return (this.hitPoints -= num);
  }
  useMove() {}
  hasFainted() {}
}
const effectiveAgainst = {
  fire: "grass",
  grass: "water",
  water: "fire",
};

const weakAgainst = {
  fire: "water",
  grass: "fire",
  water: "grass",
};

const myPokemon = new Pokemon();
const flareon = new Pokemon("flareon", "fire", 65, 20, "fire blast");
const evee = new Pokemon("evee", "normal", 55, 18, "headbutt");

module.exports = Pokemon;

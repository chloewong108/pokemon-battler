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
  useMove() {
    const message = `${this.name} used ${this.move}! Damage dealt ${this.attackDamage}!`;
    console.log(message);
    return this.attackDamage;
  }
  hasFainted() {
    if (this.hitPoints === 0) {
      return true;
    }
    return false;
  }
}

class Fire extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    console.log(name, hitPoints, attackDamage, move);
    super(name, hitPoints, attackDamage, move);
    this.type = "fire";
  }
  isEffectiveAgainst(rivalPokemon) {
    if (rivalPokemon.type === "grass") {
      return true;
    }
    return false;
  }
  isWeakTo(rivalPokemon) {
    if (rivalPokemon.type === "water") {
      return true;
    }
    return false;
  }
}

class Grass extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "grass";
  }
  isEffectiveAgainst(rivalPokemon) {
    if (rivalPokemon.type === "water") {
      return true;
    }
    return false;
  }
  isWeakTo(rivalPokemon) {
    if (rivalPokemon.type === "fire") {
      return true;
    }
    return false;
  }
}

class Water extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "water";
  }
  isEffectiveAgainst(rivalPokemon) {
    if (rivalPokemon.type === "fire") {
      return true;
    }
    return false;
  }
  isWeakTo(rivalPokemon) {
    if (rivalPokemon.type === "grass") {
      return true;
    }
    return false;
  }
}

class Charmander extends Fire {
  constructor(hitPoints, attackDamage) {
    super(hitPoints, attackDamage);
    this.move = "ember";
    this.name = "charmander";
  }
}

class Squirtle extends Water {
  constructor(hitPoints, attackDamage) {
    super(hitPoints, attackDamage);
    this.move = "water gun";
    this.name = "squirtle";
  }
}
class Bulbasaur extends Grass {
  constructor(hitPoints, attackDamage) {
    super(hitPoints, attackDamage);
    this.move = "vine whip";
    this.name = "bulbasaur";
  }
}
class Rattata extends Pokemon {
  constructor(type, hitPoints, attackDamage) {
    super(type, hitPoints, attackDamage);
    this.name = "rattata";
  }
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

module.exports = {
  Pokemon,
  Fire,
  Grass,
  Water,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
};

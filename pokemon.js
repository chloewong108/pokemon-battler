class Pokemon {
  constructor(name, hitPoints, attackDamage, move = "tackle", type = "normal") {
    (this.name = name),
      (this.hitPoints = hitPoints),
      (this.attackDamage = attackDamage),
      (this.move = move),
      (this.type = type);
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
    super(name, hitPoints, attackDamage, move, "fire");
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
    super(name, hitPoints, attackDamage, move, "grass");
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
    super(name, hitPoints, attackDamage, move, "water");
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
    super("charmander", hitPoints, attackDamage, "ember");
  }
}

class Squirtle extends Water {
  constructor(hitPoints, attackDamage) {
    super("squirtle", hitPoints, attackDamage, "water gun");
  }
}
class Bulbasaur extends Grass {
  constructor(hitPoints, attackDamage) {
    super("bulbasaur", hitPoints, attackDamage, "vine whip");
  }
}
class Rattata extends Pokemon {
  constructor(hitPoints, attackDamage, move, type) {
    super("rattata", hitPoints, attackDamage, move, type);
  }
}

class Pokeball {
  constructor() {
    this.storedPokemon = null

  }

  throw(ourPokemon) {
    if (this.isEmpty() === true) {
      this.storedPokemon = ourPokemon
    } else if(this.isEmpty() === true){
      return `You caught ${this.name}!`
    } 
    
    const message2 = `GO! ${this.name}!!`
  }

  isEmpty() {
    if(this.storedPokemon === null){
      return true
    } 
      return false 
  }

  contains() {
    if(this.quantity === 0) {
      return 'empty...'
    }
    return this.storage
  }
}

module.exports = {
  Pokemon,
  Fire,
  Grass,
  Water,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeball,
};

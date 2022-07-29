// Soldier
class Soldier {
    constructor(firstArg, secondArg) {
        this.health = firstArg;
        this.strength = secondArg
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(firstArg, secondArg, thirdArg) {
        super(secondArg, thirdArg);
        this.name = firstArg;
    }
    receiveDamage(damage) {
        super.receiveDamage(damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
       let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
       let randomSaxon = this.saxonArmy[randomSaxonIndex];
       let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
       let randomViking = this.vikingArmy[randomVikingIndex]
       const result = randomSaxon.receiveDamage(randomViking.attack())
       if (randomSaxon.health <= 0) this.saxonArmy.splice(randomSaxonIndex, 1)
       return result
    }
    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomViking = this.vikingArmy[randomVikingIndex]
        const result = randomViking.receiveDamage(randomSaxon.attack())
        if (randomViking.health <= 0) this.vikingArmy.splice(randomVikingIndex, 1)
        return result
    }
    showStatus() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        } else if (this.vikingArmy.length > 0) {
            return "Vikings have won the war of the century!"
        } else {
            return "Saxons have fought for their lives and survived another day..."
        }
    }
}

// criando estâncias da classe Viking 
const viking1 = new Viking("John", 10, 10)
const viking2 = new Viking("Allan", 10, 10)
const viking3 = new Viking("James", 10, 10)
// criando estâncias da classe Saxon 
const saxon1 = new Saxon(10, 10)
const saxon2 = new Saxon(10, 10)
const saxon3 = new Saxon(10, 10)

// criando estância da classe War
const guerra = new War()

// populando exército viking com os soldados criados
guerra.addViking(viking1)
guerra.addViking(viking2)
guerra.addViking(viking3)

// populando exército saxon com os soldados criados
guerra.addSaxon(saxon1)
guerra.addSaxon(saxon2)
guerra.addSaxon(saxon3)

// chamando as ações de combate e de status
console.log(guerra.saxonAttack())
console.log(guerra.vikingAttack())
console.log(guerra.showStatus())
console.log(guerra.saxonAttack())
console.log(guerra.vikingAttack())
console.log(guerra.showStatus())
console.log(guerra.saxonAttack())
console.log(guerra.showStatus())
/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(character) {
        this.createdAt = character.createdAt;
        this.name = character.name;
        this.dimensions = character.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game`;
    }
}

class CharacterStats extends GameObject {
    constructor(character) {
        super(character);
        this.healthPoints = character.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage`;
    }
}


class Humanoid extends CharacterStats {
    constructor(character) {
        super(character);
        this.team = character.team;
        this.weapons = character.weapons;
        this.language = character.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.




class Villain extends Humanoid{
    constructor(character) {
        super(character);
        this.createdAt = character.createdAt;
        this.name = character.name;
        this.dimensions = character.dimensions;
        this.healthPoints = 100;
        this.team = 'Villain';
        this.weapon = 'Long Sword',
        this.language = 'Elvin';
    }
    attack(hero) {
        let damage = Math.floor(Math.random() * 11);
        if (hero === null) {
            return 'No such target';
        }
        if (damage === 0) {
            return 'You Missed!';
        } else if (hero.healthPoints - damage <= 0) {
            console.log(`You eliminated ${hero.name} with a hit for ${damage}!`);
            hero = null
        } else {
            hero.healthPoints -= damage;
            return `You attacked ${hero.name} for ${damage} health points, they now have ${hero.healthPoints} health points left`
        }
    }
    checkDeath(hero) {
        if (this.healthPoints < 0) {
            console.log(`You are eliminated, goodbye.`)
            villain = null;
        } else {
            return `You are still alive with ${this.healthPoints} health points left`;
        }
    }
}

class Hero extends Humanoid{
    constructor(character) {
        super(character);
        this.createdAt = character.createdAt;
        this.name = character.name;
        this.dimensions = character.dimensions;
        this.healthPoints = 100;
        this.team = 'Hero';
        this.weapon = 'Sword',
        this.language = 'Elvin';
    }
    attack(villain) {
        let damage = Math.floor(Math.random() * 11);
        if (villain === null) {
            return 'No such target';
        }
        if (damage === 0) {
            return 'You Missed!';
        } else if (villain.healthPoints - damage <= 0) {
            console.log(`You eliminated ${villain.name} with a hit for ${damage}!`);
            villain = null
        } else {
            villain.healthPoints -= damage;
            return `You attacked ${villain.name} for ${damage} health points, they now have ${villain.healthPoints} health points left`
        }
    }
    checkDeath(hero) {
        if (this.healthPoints < 0) {
            console.log(`You are eliminated, goodbye.`)
            hero = null;
        } else {
            return `You are still alive with ${this.healthPoints} health points left`;
        }
    }
}

let hero1 = new Hero({
    createdAt: Date.now(),
    name: 'Hero',
    dimensions: [3,1,6],
})

let villain1 = new Villain({
    createdAt: Date.now(),
    name: 'Villain',
    dimensions: [2,4,2],
})

console.log(hero1);
console.log(villain1);

console.log(hero1.attack(villain1));
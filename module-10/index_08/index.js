    // 08. Classes
    // Objects built on Prototype functions, available for ES6
    // Two types of classes: Class Declarations and Class Expressions
    // https://dmitripavlutin.com/javascript-classes-complete-guide/
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    // A. Class Declaration: Named and declared by a 'class' keyword
    // It needs the 'constructor' name operator to hold/initialize the attributes
    // The 'console.log' execution is inside the class function, like a constructor function
    class Warrior {
        constructor(health,stamina) {
            this.health = health;
            this.stamina = stamina;
        }

        energy() {
            console.log('CLASS DECLARATION');
            console.log(`Health: ${this.health}%`);
            console.log(`Stamina: ${this.stamina}%`);
        }
    }
    const marth = new Warrior(45,100);
    marth.energy();


    // B. Class Expressions: Declared by a variable, and could be named or not
    // It needs the 'constructor' name operator to hold/initialize the attributes
    // The 'console.log' execution is inside the class function, like a constructor function
    let Sorcerer = class {
        constructor(health,mana) {
            this.health = health;
            this.mana = mana;
        }

        stats() {
            console.log('CLASS EXPRESSION');
            console.log(`Health: ${this.health}%`);
            console.log(`Mana: ${this.mana}%`);
        }
    };
    const robin = new Sorcerer(38,100);
    robin.stats();


    // EXAMPLE:
    class StreetFighter {
        constructor(name,health,stamina,hit,armor,) {
            this.name = name;
            this.health = health;
            this.stamina = stamina;
            this.hit = hit;
            this.armor = armor;
        }

        stats() {
            console.log(`The fighter is ${this.name}`);
            console.log(`Health ${this.health}%`);
        }

        hitpoints() {
            return this.health >= 0;
        }

        combat(fighter) {
            fighter.health = (fighter.health - this.hit) + fighter.armor + fighter.stamina;
        }
    }

    const ryu = new StreetFighter('Ryu',100,1,8,1);
    const ken = new StreetFighter('Ken',100,2,7,2);
    let ryu_turn = true;
    ryu.stats();
    ken.stats();

    const round = setInterval(() => {
        if (!ryu.hitpoints() || !ken.hitpoints()) {
            clearInterval(round);
            console.log(`${this.name}'s has lost!`);
        }
        else if (ryu_turn) {
            ryu.combat(ken);
            ken.stats();
        }
        else {
            ken.combat(ryu);
            ryu.stats();
        }
        ryu_turn = !ryu_turn;
    }, 2000);

    // TODO: How many 'constructors' are available to use inside a 'class' object?
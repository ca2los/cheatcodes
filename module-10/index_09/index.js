    // 09. CLASSES: Main program

    class GhostOfTsushima {
        constructor(name,type,health,weapon,defense) {
            this.name = name;
            this.type = type;
            this.health = health;
            this.weapon = weapon;
            this.defense = defense;
        }

        stats() {
            console.log(`${this.name}.`);
            console.log(`He is a ${this.type} and a master at ${this.weapon}.`);
            console.log(`He is wearing the ${this.defense}.`);
        }
    }

    module.exports = GhostOfTsushima;

    // @ Line 3-16
    // We have the main 'class declaration' to determine the core of the program.
    // The 'constructor' operator has arguments inside of it, promises all of them.
    // The 'stats' function is the main trigger of the program's 'class'.

    // @ Line 18
    // Exports the class declaration into any program who calls it back.
    // 02. Prototypes

    function BroodWar(expansion,antagonist,plot) {
        this.expansion = expansion;
        this.antagonist = antagonist;
        this.plot = plot;
    }
    const kerrigan = new BroodWar('Brood War','Sarah Kerrigan','Arcturus Mengsk');

        BroodWar.prototype.log_data = function() {
            console.log(`${this.expansion} is the expansion where ${this.antagonist} searches for vengeance against ${this.plot}.`);
        }
        kerrigan.log_data();


    function Andromeda(episode,hero,rating) {
        this.episode = episode;
        this.hero = hero;
        this.rating = rating;
    }
    const game = new Andromeda('expansion','new heroes','bad rating');

        Andromeda.prototype.answer = function() {
            console.log(`Andromeda is an ${this.episode} of Mass Effect with ${this.hero} with ${this.rating} among game critics.`);
        }
        game.answer();


    function Dishonored(character,fight,rescue) {
        this.character = character;
        this.fight = fight;
        this.rescue = rescue;
    }
    const bethesda = new Dishonored('Korvo','kill traitors','save the daughter of the Queen');

        Dishonored.prototype.solution = function() {
            console.log(`In Dishonored, ${this.character} is seeking to ${this.fight} and ${this.rescue}.`);
        }
        bethesda.solution();


    // TODO: RTS gaming

    /* Constructor function: Character constructor */
    function FireEmblem(aka,age,strength,hitpoints,ability) {
        this.aka = aka;
        this.age = age;
        this.strength = strength;
        this.hitpoints = hitpoints;
        this.ability = ability;
    }

        /* Prototype: Character STATS */
        FireEmblem.prototype.stats = function() {
            console.log(`
                The name is ${this.aka}\n 
                Age of ${this.age} years old\n 
                Strength is ${this.strength}/100\n 
                Hitpoints are ${this.hitpoints}/100\n 
                The ability is ${this.ability}\n
            `)
        }

        /* Prototype: Character LIFE */
        FireEmblem.prototype.life = function() {
            if(this.hitpoints > 0) {
                console.log(`${this.aka} has ${this.hitpoints}/100 and is ALIVE`);
                return true;
            }
        }

        /* Prototype: Character LEVEL UP */
        FireEmblem.prototype.level = function() {
            this.strength += 5;
            this.hitpoints += 7;
        }

        const marth = new FireEmblem('Marth', 22, 17, 38, 'Sword');
        const robin = new FireEmblem('Robin', 22, 19, 34, 'Magic');

        marth.stats();
        marth.life();
        marth.level();
        marth.stats();

        robin.stats();
        robin.life();
        robin.level();
        robin.stats();

    // TODO: Is it possible to change values like in the constructor example?
    // Prototype is an operator that associates a method to the constructor function
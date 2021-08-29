    // 09. CLASSES: Imports the index class and triggers a new class.

    const GhostOfTsushima = require('./index');

    class Hero extends GhostOfTsushima {
        constructor(hero,samurai,life,katana,armor,punch) {
            const name = hero + ' from Japan';
            const type = samurai + ' warrior';
            const health = life + ' hit points';
            const weapon = katana + ' sword';
            const defense = armor + ' from the main battle';
            const hit = punch + ' attack';

            super(name,type,health,weapon,defense,hit);

            this.hero = hero;
            this.samurai = samurai;
            this.life = life;
            this.katana = katana;
            this.armor = armor;
            this.punch = punch;
        }
    }
    const character_01 = new Hero('Jin Sakai','Samurai','60','Sakai Katana','Broken armor', '35');
    character_01.stats();

    // Line 5: The 'class' and 'extends' operators define a new object importing the function from the index file.
    // Line 13: The 'super' class holds the original arguments from the main class inside the 'index' file.
    // Line 5-21: The new class defines a new 'constructor' set of arguments to create interaction between values.
    // Line 22: Defining the values to pass inside 'Hero' object.
    // Line 23: Execution of line 23 with the 'function' from (connection between) 'index.js'.
    
    class Enemy extends GhostOfTsushima {
        constructor(enemy,mongol,life,blade,armor,punch) {
            const name = enemy + ' from Mongolia';
            const type = mongol + ' intruder';
            const health = life + ' hit points';
            const weapon = blade + ' weapons';
            const defense = armor + ' for elite warriors';
            const hit = punch + ' counter attack';

            super(name,type,health,weapon,defense,hit);

            this.enemy = enemy;
            this.mongol = mongol;
            this.life = life;
            this.blade = blade;
            this.armor = armor;
            this.punch = punch;
        }
    }
    const character_02 = new Enemy('Mongol Warlord','soldier','80','shield with a sword','Gold Plated armor');
    character_02.stats();

    module.exports = Hero;
    module.exports = Enemy;
    // TODO: Is it allowed to have more than one 'module.exports' instruction per line?
    // TODO: How many 'extends' are available in every 'class'?
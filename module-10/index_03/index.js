    // 03. Polymorphism

    const Terran = function() {
        this.attack = function(nuke,yamato) {
            console.log('GHOST: Available');
            if(!yamato) {
                console.log('Yamato is missing.');
                return `Ghosts deadly message: ${nuke}.`;
            }
            console.log('BATTLECRUISER: Available');
            return `
            Ghosts deadly weapon: ${nuke}.
            Battlecruisers deadly weapon: ${yamato}.
            `;
        }
    };
    const battle = new Terran();
    console.log(battle.attack(' Never know what hit \'em.'));
    console.log(battle.attack(' Never know what hit \'em.','Engage!'));


    const Ghost = function() {
        this.dialog = function(motoko,batou) {
            return `Motoko dialog:\n ${motoko}\nBatou dialog:\n ${batou}\n`
        }
    };
    const shell = new Ghost();
    console.log(shell.dialog('Man Is An Individual Only Because Of His Intangible Memory.','Loud and clear. He\'s about to engage.'));
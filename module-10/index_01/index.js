    // 01. Constructor Functions

    function StarCraft(blizzard,character,unit) {
        this.blizzard = blizzard;
        this.character = character;
        this.unit = unit;

        this.battle = () => {
            if (this.blizzard === true) {
                console.log('The character of ' + this.character + ' is a ' + this.unit + ' unit.');
            }
        }
    }
    const jim_raynor = new StarCraft(true, 'Jim Raynor', 'Vulture');
    const kerrigan = new StarCraft(false,'Sarah Kerrigan', 'Ghost');
    jim_raynor.battle();
    kerrigan.battle();

    /*
    kerrigan.blizzard = true;
    kerrigan.battle();
    */


    function MassEffect(bioware,specter,antagonist) {
        this.bioware = bioware;
        this.specter = specter;
        this.antagonist = antagonist;

        this.plot = () => {
            if (this.bioware === true) {
                console.log('The ' + this.specter + ' enemies are the ' + this.antagonist);
            }
        }
    }
    const shepard = new MassEffect(true,'Commander Shepard','Reapers' + '.');
    const saren = new MassEffect(false,'Specter Saren',' aliens ' + '.');
    shepard.plot();
    saren.plot();

    /*
    saren.bioware = true;
    saren.plot();
    */


    function DeusEx(eidos,detective,augmented) {
        this.eidos = eidos;
        this.detective = detective;
        this.augmented = augmented;

        this.controversy = () => {
            if (this.eidos === true)  {
                console.log('Detective ' + this.detective + ' is in a fight to unify ' + this.augmented + ' with regular humans.');
            }
        }
    }
    const adam = new DeusEx(true,'Adam Jensen','augmented people');
    const sarif = new DeusEx(false,'Sarif Industries','augmented people');
    adam.controversy();
    sarif.controversy();

    /*
    sarif.eidos = true;
    sarif.controversy();
    */


    function BladeRunner(interrogate,blade,replicant) {
        this.interrogate = interrogate;
        this.blade = blade;
        this.replicant = replicant;

        this.scene = () => {
            if (this.interrogate === true) {
                console.log('The movie scene where the agent ' + this.blade + ' interrogates ' + this.replicant + ' is the best scene of the movie.');
            }
            else if (this.interrogate === false) {
                console.log('The movie scene where the agent ' + this.blade + ' interrogates ' + this.replicant + ' is the best scene of the movie.');
            }
            else {
                console.error('No data.');
            }
        }
    }
    const romance = new BladeRunner(true,'Deckard','Rachael');
    const consequence = new BladeRunner(false,'Deckard','Roy Batty');
    romance.scene();
    consequence.scene();

    // The promise that I will return something
    // Operator 'new" adds a new property to the object linked to the constructor function
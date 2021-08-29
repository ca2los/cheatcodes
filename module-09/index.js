    // Immediately Invoked Function Expression
    (function initialize_me(){
        console.log('Hello Node :D');
    })();

    // Fat Arrow + 2 Parameters (Without 'function && curly braces && return')
    let two_parameters = (name, message) => name + ': ' + message + '!';

        /*
        Original Function:
        let two_parameters = function (name, message) {
            return name + ': ' + message + '!';
        };

        Fat Arrow Without Function:
        let two_parameters = (name, message) => {
            return name + ': ' + message + '!';
        };
        */

    // Fat Arrow + 1 Parameter (Without 'function && curly braces && return)
    let execute_functions = parameters => console.log(parameters);

    // The call is the same as any other function
    let parameters = two_parameters('Fat Arrow','Retrieving a 2 parameters function');

    // Execute the function as always
    execute_functions(parameters);

    // You should not make use of Fat Arrow Functions (FAF):
    // WHEN the object of the function has methods.
    // WHEN the function has more than one level.
    // WHEN the function has dynamic content, it could be confusing with jQuery and Vue Js.
    // https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html
    
    // The difference between 'let' and 'var':
    // The 'var' will be available at any part of the code, more global or outside.
    // The 'let' will be available only at the scope of the block, more local or inside.
    
    // The meaning of 'const' or constant:
    // Constant is related to the reference, not to the value.
    const blizzard = ['StarCraft','BroodWar','Wings Of Liberty'];
    blizzard.push('Diablo'); // Available only at arrays.
    console.log(blizzard);

    const sony = {'PS5':499,'Controller':99,'Returnal':99};
    sony.Returnal = 89; // Update value only at objects.
    console.log(sony);

    // For Each is a method to manipulate array's or object's elements.
    // For Each is perfect to iterate through arrays or objects without For-Loops.
    const stock = [
        {'Game':'StarCraft','Price':19.99},
        {'Game':'BroodWar','Price':29.99},
        {'Game':'Wings Of Liberty', 'Price':0}
    ];
    stock.forEach((title,costs) => title.Game + costs.Price);
    //stock.forEach(costs => console.log(costs.Price));
        /*
        stock.forEach(
            function(costs){
                console.log(costs.Price);
            }
        );
        */

    // Filter is a method to return values only WHEN are TRUE.
    const show_data = stock.filter((show_me) => show_me.Price < 20);
    console.log(show_data);
        /*
        const show_data = stock.filter(
            function(show_me) {
                return show_me.Price < 20;
            }
        );
        */

    // Map is a method that creates a similar array as the original, but with more data.
    const favorite_games = [
        {title:'Mass Effect',console:'PS5'},
        {title:'Deus Ex',console:'PS5'},
        {title:'Demons Souls',console:'PS5'},
        {title:'Metroid',console:'Switch'},
        {title:'Fire Emblem',console:'Switch'}
    ]
    const brands = favorite_games.map(check => { // New array
        const add_brand = {...check};           // The three dots (...) add the value inside the object as a new property.

        if (check.console === 'PS5') {
            check.brand = 'Sony';
        } else {
            check.brand = 'Microsoft';
        }
        return check;
    });
    console.log(favorite_games);
    console.log(brands);

    // Back ticks are useful for concatenating values inside a string.
    const sentence = `The last game I played was ${brands[0].title} in the ${brands[0].console} from ${brands[0].brand}!`;
    console.log(sentence);

    // Process ARGV returns arguments on NodeJS execution.
    // https://nodejs.org/docs/latest/api/process.html#process_process_argv
    console.log(process.argv);      // Prints the first two arguments in the array, by default.
    console.log(process.argv[2]);   // Prints undefined because there is no third argument in the default array.
    // If you want to add a new argument, you must type at the Terminal:
    // $ node index.js any_value_you_vant for example:
    // $ node index.js ps5
    // console.log(process.argv[2] === process.argv[3]);
    if (process.argv[2] === process.argv[3]){
        console.log('The same gaming console.');
    } else {
        console.log('Different gaming consoles.');
    }

    // The 'fs' is a library for reading and writing a new file.
    // The "READ FILE" will return the arguments inside the document.
    // The "WRITE FILE" will add anything you pass from argv[2].
    const invoke = require('fs');
    //invoke.readFile('data.csv','utf-8',(error,data) => error ? console.error(error) : console.log(data));
    //invoke.writeFile('log.txt',)
    invoke.appendFile('log.txt',`${process.argv[2]}\n`,(error) => error ? console.error(error) : console.log('New line added!'));

    // The 'Require' and "Module exports" to access data from another file.
    const addon = require('./addon.js');
    console.log(addon.computers);
    console.log(addon.consoles);
    console.log(addon.controllers);

    const nintendo_switch = [
        '1. Fire Emblem',
        '2. Zelda: Breath Of The Wild',
        '3. Zelda: Links Awakening'
    ]
    for(const value of nintendo_switch) console.log(value.fontcolor('#00FFFF'));
    console.log('\n================================================\n');

    // For Of Loop is another version of For Each, it will iterates through
const addon = require('./addon.js');
const num_one = parseInt(process.argv[3]);  // Captures the fourth value, of any kind from the Terminal
const num_two = parseInt(process.argv[4]);  // Captures the fifth value, of any kind from the Terminal
const operation = 'sum';    // It determines the type of argument yoy are accessing at the remote file

switch (operation) {
    case 'sum':
        console.log(addon.sum(num_one,num_two));
        break;
    case 'difference':
        console.log(addon.difference(num_one,num_two));
        break;
    case 'product':
        console.log(addon.product(num_one,num_two));
        break;
    case 'quotient':
        console.log(addon.quotient(num_one,num_two));
        break;
    default:
        alert( "I don't know such values" );
}

// At the Terminal you must run something like:
// $ node index.js opertation 12 5
// $ 17
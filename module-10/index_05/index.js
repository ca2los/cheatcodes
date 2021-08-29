    // 05. Promises and Inputs

    // A. Retireve the input value when 'node index_05.js' + 'value' is executed
    const input_ok = process.argv[2];

    // B. If the input is 'null' or 'undefined', then show the alert. Else
    if (!input_ok) {
        console.log('You must enter your current activity.\nTry something like: node index_05.js coding');
        process.exit(); // Do I need this? It's not strictly necessary, but it will stop steps C and D from running
    } else {
        console.log('The user is ' + input_ok + '.');
    }

    // C. ONLY when the input is different than "coding", then CONSTANT is TRUE and ACTIVATED
    const input_wrong = input_ok !== 'coding';

    // D. Create a function to load the error message
    const message = new Promise((good,bad) => {
        if (input_wrong) {
            bad(); // bad(new Error('Wrong input from the user.'));
        }
        good(); // good('Correct input from the user.');
    });

    // E. Passing two values into the "message" function, one for correct and another for wrong answers.
    message.then(() => console.log('The Promise has been honored.')).catch(() => console.log('The Promise is broken.'));
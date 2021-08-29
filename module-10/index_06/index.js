    // 06. Promises and Time

    // Every Promise in this program is loading the time from the inside "const time".
    const barrack_00 = new Promise((accept,cancel) => {
        const time = 0;
        if (time < 0) {
            cancel(new Error('No Marine to create.'));
        }
        else {
            accept('Creating a Marine...');
        }
    });

    const barrack_01 = new Promise((accept,cancel) => {
        const time = 1000;
        if (time < 0) {
            cancel(new Error('No Marine to create.'));
        }
        else {
            setTimeout(() => {
               accept('Creating a Marine: 1 second');
            }, time);
        }
    });

    const barrack_02 = new Promise((accept,cancel) => {
        const time = 5000;
        if (time < 0) {
            cancel(new Error('No Marine to create.'));
        }
        else {
            setTimeout(() => {
                accept('Creating a Marine: 5 seconds');
            }, time);
        }
    });

    const barrack_03 = new Promise((accept,cancel) => {
        const time = 10000;
        if (time < 0) {
            cancel(new Error('No Marine to create.'));
        }
        else {
            setTimeout(() => {
                accept('Creating a Marine: 10 seconds');
            }, time);
        }
    });

    // Promise ".all()" stores the constants as arrays and execute the program.
    Promise.all([barrack_00,barrack_01,barrack_02,barrack_03]).then(barracks => {
        console.log('The time it takes to create a Marine');
        console.log(barracks);
    }).catch((err) => new Error(err));
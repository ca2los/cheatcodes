    // 04. A Real Promise

    const finish = true;

    // The CONSTANT is promising a constructor function.
    const achievement = new Promise((complete,incomplete) => {
        if(finish) {
            const reward = {
                name: 'ULTIMATE WARRIOR',
                type: true
            }
            complete(reward);
        } else {
            const punish = new Error('Your are DEAD!');
            incomplete(punish);
        }
    });
    // "ACHIEVEMENT" is loading already a "PROMISE" object function with arguments.
    // "ERROR" constructor creates an error object.

    // The CONSTANT is promising a constructor function only for REWARD
    // PROMISE is the representation of an object
    const congratulate = (trophy) => {
        const message = `Power unlocked: ${trophy.name}`;
        return Promise.resolve(message);
    }

    achievement.then(response => console.log(response)).catch(err => console.log(err));
    achievement.then(congratulate).then((accomplished) => console.log(accomplished)).catch((err) => console.log(err));
    // "THEN" follows a promise function and it needs at least two arguments: Callback functions (success) and cases (failure).
    // "CATCH" deals with rejected cases only and you must always provide a function.


    const bonus = true;
    const mission = new Promise((complete,incomplete) => {
        if (finish) {
            const reward = {
                name: 'SPECIAL MISSION',
                type: true
            }
            complete(reward);
        } else {
            const lose = new Error('Try again!');
            incomplete(lose);
        }
    });

    const prize = (trophy) => {
        const message = `You have unlocked a ${trophy.name}!`;
        return Promise.resolve(message);
    }

    mission.then(any_name => console.log(any_name)).catch(err => console.log(err));
    mission.then(prize).then(any_name => console.log(any_name)).catch(err => console.log(err));
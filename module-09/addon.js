    const computers = 6;
    const consoles = 4;
    const controllers = 10;

    module.exports = {
        computers,          // It's the same as computers:'computers',
        consoles,
        controllers,
        sum: (a, b) => a + b,
        difference: (a, b) => a - b,
        product: (a, b) => a * b,
        quotient: (a, b) => a / b,
    };
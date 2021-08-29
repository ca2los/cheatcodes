    // 07. Jest Testing Framework: This file is executing the tests and imports or connects with the triggers

    const Baldor = require('./index');

    describe('Baldor', () => {
        describe('Set the numbers for the operation.', () => {

            it('Initialize the addition.', () => {
                const cypher = new Baldor(22);
            });

            it('Initialize the subtraction.', () => {
                const cypher = new Baldor(8);
            });

            it('Initialize the multiplication.', () => {
                const cypher = new Baldor(8);
            });

            it('Initialize the division.', () => {
                const cypher = new Baldor(8);
            });

        });
    })
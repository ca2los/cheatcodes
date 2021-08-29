    // 07. Jest Testing Framework: This file builds an export or connects the triggers.

    // A. Starting out with a CONSTRUCTOR function
    const Arithmetic = require("./arithmetic");

    function Baldor(number) {
        this.number = number;
    }

    // B. Defining the PROTOTYPE functions
    Baldor.prototype.addition = function (digit) {
        const new_digit = this.number + digit;
        return new Baldor(new_digit);
    };

    Baldor.prototype.substract = function (digit) {
        const new_digit = this.number - digit;
        return new Baldor(new_digit);
    };

    Baldor.prototype.multiplicate = function (digit = 0) {
        const new_digit = this.number * digit;
        return new Baldor(new_digit);
    };

    Baldor.prototype.division = function (digit = 0) {
        const new_digit = this.number / digit;
        return new Baldor(new_digit);
    }

    Baldor.prototype.result = function () {
        return this.number;
    }

    // C. EXPORTING the functions
    module.exports = Baldor;

    // I just need the execution of the constant with the values
    const value = new Baldor(4).addition(8).substract(15).multiplicate(16).division(23).value();
    console.log(value);
const inquirer = require('inquirer');
// Require allows you to import a library from NPM or a local or external JS file.

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What languages do you know?',
        name: 'language'
    },
    {
        type: 'input',
        message: 'What is your preferred method of communication?',
        name: 'preferred'
    }
]);

// For every project I need to run the command 'npm init -y' to load the package.json
// Now to install 'inquirer' I need to run the command 'npm i inquirer --save'.
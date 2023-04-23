#!/usr/bin/env node

const { Command } = require('commander');
const {
    entityCommand,
    dtoCommand,
    interfaceCommand,
    useCaseCommand,
    modelCommand,
    repositoryCommand,
    resourceCommand, controllerCommand, moduleCommand,
} = require('../commands');


const start = async () => {
    const program = new Command();
    program.version('1.0.0');

    // core commands
    program.addCommand(dtoCommand);
    program.addCommand(entityCommand);
    program.addCommand(interfaceCommand);
    program.addCommand(useCaseCommand);

    // data commands
    program.addCommand(modelCommand);
    program.addCommand(repositoryCommand);

    // other commands
    program.addCommand(controllerCommand);
    program.addCommand(moduleCommand);
    program.addCommand(resourceCommand);

    program.parse(process.argv);

};

start();
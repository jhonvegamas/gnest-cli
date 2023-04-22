#!/usr/bin/env node

const { Command } = require('commander')
const {
    entityCommand,
    dtoCommand,
    interfaceCommand,
    useCaseCommand,
    modelCommand,
    repositoryCommand,
} = require('../src/commands')


const start = async () => {
    const program = new Command()
    program.version('1.0.0')

    // core commands
    program.addCommand(dtoCommand)
    program.addCommand(entityCommand)
    program.addCommand(interfaceCommand)
    program.addCommand(useCaseCommand)

    // data commands
    program.addCommand(modelCommand)
    program.addCommand(repositoryCommand)

    program.parse(process.argv)

}

start()
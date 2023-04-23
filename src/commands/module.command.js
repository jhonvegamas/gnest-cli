const { Command } = require('commander');
const { executeCommand } = require('../execute-command');
const { moduleTemplate } = require('../templates/module.template');

const COMMAND = 'module';
const moduleCommand = new Command()
    .command(COMMAND)
    .description(`Create ${COMMAND} file`)
    .arguments('<file-name>')
    .action((fileName) => {
        executeCommand(fileName, '', moduleTemplate, COMMAND);
    });

module.exports = moduleCommand;

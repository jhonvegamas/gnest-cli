const { Command } = require('commander');
const { executeCommand } = require('../utilities/execute-command');
const { controllerTemplate } = require('../templates/controller.template');

const COMMAND = 'controller';
const controllerCommand = new Command()
    .command(COMMAND)
    .description(`Create ${COMMAND} file`)
    .arguments('<file-name>')
    .action((fileName) => {
        executeCommand(fileName, '', controllerTemplate, COMMAND);
    });

module.exports = controllerCommand;

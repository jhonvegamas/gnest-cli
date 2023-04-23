const { Command } = require('commander');
const { executeCommand } = require('../../execute-command');
const { modelTemplate } = require('../../templates/data/model.template');

const COMMAND = 'model';
const modelCommand = new Command()
    .command(COMMAND)
    .alias('m')
    .description(`Create ${COMMAND} file`)
    .arguments('<file-name>')
    .action((fileName) => {
        executeCommand(fileName, 'data/models', modelTemplate, COMMAND);
    });

module.exports = modelCommand;

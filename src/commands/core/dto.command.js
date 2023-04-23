const { Command } = require('commander');
const { executeCommand } = require('../../utilities/execute-command');
const { dtoTemplate } = require('../../templates/core/dto.template');

const COMMAND = 'dto';
const dtoCommand = new Command()
    .command(COMMAND)
    .alias('d')
    .description(`Create ${COMMAND} file`)
    .arguments('<file-name>')
    .action((fileName) => {
        executeCommand(fileName, 'core/dto', dtoTemplate, COMMAND);
    });

module.exports = dtoCommand;

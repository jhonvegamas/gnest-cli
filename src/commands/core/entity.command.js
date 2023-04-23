const { Command } = require('commander');
const { executeCommand } = require('../../execute-command');
const { entityTemplate } = require('../../templates/core/entity.template');

const COMMAND = 'entity';
const dtoCommand = new Command()
    .command(COMMAND)
    .alias('e')
    .description(`Create ${COMMAND} file`)
    .arguments('<file-name>')
    .action((fileName) => {
        executeCommand(fileName, 'core/entities', entityTemplate, COMMAND);
    });

module.exports = dtoCommand;

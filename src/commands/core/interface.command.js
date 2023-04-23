const { Command } = require('commander');
const { executeCommand } = require('../../utilities/execute-command');
const { interfaceTemplate } = require('../../templates/core/interface.template');

const COMMAND = 'interface';
const interfaceCommand = new Command()
    .command(COMMAND)
    .alias('i')
    .description(`Create ${COMMAND} file`)
    .arguments('<file-name>')
    .action((fileName) => {
        executeCommand(
            'i-' + fileName,
            'core/interfaces',
            interfaceTemplate,
            COMMAND,
            { customClassName: fileName },
        );
    });

module.exports = interfaceCommand;

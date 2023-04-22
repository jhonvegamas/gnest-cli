const {Command} = require('commander');
const {executeCommand} = require('../../execute-command');
const {useCaseTemplate} = require('../../templates/core/use-case.template');

const COMMAND = 'case';
const useCaseCommand = new Command()
    .command(COMMAND)
    .alias('uc')
    .alias('use-case')
    .description(`Create ${COMMAND} file`)
    .arguments('<file-name>')
    .action((fileName) => {
        executeCommand(fileName, 'core/use-cases', useCaseTemplate, COMMAND);
    });

module.exports = useCaseCommand;

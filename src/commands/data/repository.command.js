const {Command} = require('commander');
const {executeCommand} = require('../../execute-command');
const {repositoryTemplate} = require("../../templates/data/repository.template");

const COMMAND = 'repository';
const repositoryCommand = new Command()
    .command(COMMAND)
    .alias('r')
    .description(`Create ${COMMAND} file`)
    .arguments('<file-name>')
    .action((fileName) => {
        executeCommand(fileName, 'data/repositories', repositoryTemplate, COMMAND);
    });

module.exports = repositoryCommand;

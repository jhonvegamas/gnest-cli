const { Command } = require('commander');
const { createResource } = require('../utilities/create-resource');

const COMMAND = 'resource';
const resourceCommand = new Command()
    .command(COMMAND)
    .description('Create a new resource')
    .arguments('<name>')
    .option('-f, --force', 'force recreate the resource')
    .action(async (name, options) => {
        try {
            await createResource(name, options.force);
        } catch (error) {
            console.error(error.message);
        }
    });

module.exports = resourceCommand;

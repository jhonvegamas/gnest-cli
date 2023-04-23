const dtoCommand = require('./core/dto.command');
const entityCommand = require('./core/entity.command');
const interfaceCommand = require('./core/interface.command');
const useCaseCommand = require('./core/use-case.command');
const modelCommand = require('./data/model.command');
const repositoryCommand = require('./data/repository.command');
const resourceCommand = require('./resource.command');
const controllerCommand = require('./controller.command');
const moduleCommand = require('./module.command');


module.exports = {
    dtoCommand,
    entityCommand,
    interfaceCommand,
    useCaseCommand,
    modelCommand,
    repositoryCommand,
    resourceCommand,
    controllerCommand,
    moduleCommand
};

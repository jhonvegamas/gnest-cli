const { executeCommand } = require('./execute-command');
const { dtoTemplate } = require('../templates/core/dto.template');
const { entityTemplate } = require('../templates/core/entity.template');
const { interfaceTemplate } = require('../templates/core/interface.template');
const { useCaseTemplate } = require('../templates/core/use-case.template');
const { modelTemplate } = require('../templates/data/model.template');
const { repositoryTemplate } = require('../templates/data/repository.template');
const fs = require('fs');
const { controllerTemplate } = require('../templates/controller.template');
const { moduleTemplate } = require('../templates/module.template');

function createResource(resource) {
    const coreFolder = `${resource}/core`;
    const dataFolder = `${resource}/data`;

    // core folders
    const dtoFolder = `${coreFolder}/dto`;
    const entitiesFolder = `${coreFolder}/entities`;
    const interfacesFolder = `${coreFolder}/interfaces`;
    const useCasesFolder = `${coreFolder}/use-cases`;

    // data folders
    const modelsFolder = `${dataFolder}/models`;
    const repositoriesFolder = `${dataFolder}/repositories`;

    // create folders
    fs.mkdirSync(resource, { recursive: true });

    // core files
    executeCommand('create-' + resource, dtoFolder, dtoTemplate, 'dto');
    executeCommand(resource, entitiesFolder, entityTemplate, 'entity');
    executeCommand('i-' + resource, interfacesFolder, interfaceTemplate, 'interface',
        { customClassName: resource },
    );
    executeCommand('create-' + resource, useCasesFolder, useCaseTemplate, 'case');


    // data folders
    executeCommand(resource, modelsFolder, modelTemplate, 'model');
    executeCommand(resource, repositoriesFolder, repositoryTemplate, 'repository');

    // base files
    executeCommand(resource, resource, controllerTemplate, 'controller');
    executeCommand(resource, resource, moduleTemplate, 'module');


    console.log(`Resource ${resource} created`);
}

exports.createResource = createResource;

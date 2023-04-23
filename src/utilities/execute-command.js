const fs = require('fs');
const { kebabToPascal } = require('./kebab-to-pascal');

function executeCommand(
    fileName,
    folder,
    template,
    command,
    options = { customClassName: null },
) {
    const className = kebabToPascal(options.customClassName ?? fileName);
    const folderPath = folder ? `${folder}/` : '';
    const directory = `${folderPath}${fileName}.${command}.ts`;
    const fileContent = template.replaceAll('{className}', className);

    if (folder) {
        fs.mkdirSync(folder, { recursive: true });
    }
    fs.writeFileSync(directory, fileContent);

    console.log(`${command} ${fileName} created ${folder}`);
}

exports.executeCommand = executeCommand;
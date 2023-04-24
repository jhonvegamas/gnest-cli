const fs = require('fs');
const { kebabToPascal } = require('./kebab-to-pascal');

function executeCommand(
    fileName,
    folder,
    template,
    command,
    options = { customClassName: null, customFileName: null },
) {
    const className = kebabToPascal(options.customClassName ?? fileName);
    const folderPath = folder ? `${folder}/` : '';
    const fileNameWithExtension = options.customFileName
        ? `${options.customFileName}.ts`
        : `${fileName}.${command}.ts`;
    const directory = `${folderPath}${fileNameWithExtension}`;
    const fileContent = template.replaceAll('{className}', className);

    if (folder) {
        fs.mkdirSync(folder, { recursive: true });
    }
    fs.writeFileSync(directory, fileContent);

    console.log(`${command} ${fileName} created ${folder}`);
}

exports.executeCommand = executeCommand;
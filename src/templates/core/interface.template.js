const interfaceTemplate = `export abstract class I{className}Service {
  abstract create(data: Create{className}Dto): Promise<{className}Entity>;
}
`;

exports.interfaceTemplate = interfaceTemplate;

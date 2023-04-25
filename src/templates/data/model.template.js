const modelTemplate = `
export class {className}Model implements {className}Entity {
  id: string;  
  name: string;
  
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;

  // Source model is the model received from the source, prisma, sequelize, etc.
  // Example: prismaModel: Prisma{className}Model 
  constructor(sourceModel: SourceModel) {
    this.id = sourceModel.id;
    this.name = sourceModel.name;    
  }
}
`;

exports.modelTemplate = modelTemplate;

const modelTemplate = `
export class {className}Model implements {className}Entity {
  id: string;  
  name: string;
  
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;

  // source model is the model received from the source, prisma, sequelize, etc.
  constructor(sourceModel: SourceModel) {
    this.id = sourceModel.id;
    this.name = sourceModel.name;    
  }
}
`;

exports.modelTemplate = modelTemplate;

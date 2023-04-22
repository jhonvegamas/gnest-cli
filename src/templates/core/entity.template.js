const entityTemplate = `export abstract class {className}Entity {
  id: string;  
  name: string;
  
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
`;

exports.entityTemplate = entityTemplate;

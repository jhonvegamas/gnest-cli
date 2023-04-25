const repositoryTemplate = `import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class {className}Repository implements I{className}Service {
  // Source prisma, typeorm, mongoose, etc
  // Example: constructor(private readonly prismaService: PrismaService) {} 
  constructor(private readonly source: SourceService) {}

  async create(create: Create{className}Dto): Promise<{className}Entity> {
    // query to create in database and return the created entity
    throw new BadRequestException('Repository not implemented');
  }
}
`;

exports.repositoryTemplate = repositoryTemplate;

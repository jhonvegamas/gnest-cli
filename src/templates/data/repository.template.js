const repositoryTemplate = `import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class {className}Repository implements IService {
  constructor(private readonly source: SourceService) {}

  async create(create: CreateDto): Promise<Entity> {
    // query to create in database and return the created entity
    throw new BadRequestException('Repository not implemented');
  }
}
`;

exports.repositoryTemplate = repositoryTemplate;

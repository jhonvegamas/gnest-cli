const useCaseTemplate = `import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class {className}Case {
  constructor() {}

  async execute(): Promise<{className}Entity> {    
      throw new BadRequestException('Use case not implemented');    
  }
}
`;

exports.useCaseTemplate = useCaseTemplate;

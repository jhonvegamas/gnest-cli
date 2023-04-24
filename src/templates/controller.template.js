const controllerTemplate = `import {
  BadRequestException,
  Body,
  Controller,
  Get,  
  Post,
  Request,
} from '@nestjs/common';

@Controller('{className}')
export class {className}Controller {
  constructor() {}

  @Post()
  async create(
    @Body() body: Create{className}Dto,
    @Request() req,
  ): Promise<{className}Entity> {
    throw new BadRequestException('Not implemented');
  } 
}
`;

exports.controllerTemplate = controllerTemplate;

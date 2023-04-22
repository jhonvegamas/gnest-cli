const dtoTemplate = `import { IsOptional, IsString } from 'class-validator';

export class {className}Dto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
`;

exports.dtoTemplate = dtoTemplate;

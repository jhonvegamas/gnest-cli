const moduleTemplate = `import { Module } from '@nestjs/common';

@Module({
  controllers: [{className}Controller],
  providers: [
    Create{className}Case,
    { provide: I{className}Service, useClass: Source{className}Repository },
  ],
  imports: [DataBaseModule, {className}DomainsModule],
})
export class {className}Module {}
`;

exports.moduleTemplate = moduleTemplate;

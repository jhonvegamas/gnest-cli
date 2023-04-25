const moduleTemplate = `import { Module } from '@nestjs/common';

@Module({
  controllers: [{className}Controller],
  providers: [
    Create{className}Case,    
    // Source is the data source, it can be a database, an external service, etc.
    // Example prisma: Prisma{className}Repository
    { provide: I{className}Service, useClass: Source{className}Repository },
  ],
  // DataBaseModule is a module that contains repositories
  // Example prisma: PrismaModule
  imports: [DataBaseModule],
})
export class {className}Module {}
`;

exports.moduleTemplate = moduleTemplate;

# GNest CLI

GNest CLI is a command-line tool for generating common files used in NestJS projects.

## Installation

To install GNest CLI, you must first have Node.js and npm installed. Then, run the following command:

```
npm install -g gnest-cli
```

## Available Commands

### DTO

The `dto` command generates a DTO file with the specified name in the `/src/dto` folder.

#### Usage

```
gnest-cli dto [file-name]
```

#### Example

```
gnest-cli dto create-user
```

# Commands

## Core

| Command   | Abbr. | Path             |
|-----------|-------|------------------|
| dto       | d     | core/dto/        |
| entity    | e     | core/entities/   |
| interface | i     | core/interfaces/ |
| use-case  | uc    | core/use-cases/  |

## Data

| Command    | Abbr. | Path               |
|------------|-------|--------------------|
| model      | m     | data/models/       |
| repository | r     | data/repositories/ |

## App

| Command    | Abbr. | Path |
|------------|-------|------|
| module     | N/A   | /    |
| controller | N/A   | /    |

## Others

| Command  | Abbr. | Path |
|----------|-------|------|
| resource | N/A   | /    |

## Directory Structure

```
module/
├── core/
│   ├── dto/
│   │   └── file.dto.ts
│   ├── entities/
│   │   └── file.entity.ts
│   ├── interfaces/
│   │   └── i-file.service.ts
│   └── use-cases/
│       └── create-file.case.ts
├── data/
│   ├── models/
│   │   └── file.model.ts
│   └── repositories/
│       └── file.repository.ts
├── file.controller.ts
└── file.module.ts
```

This is a custom directory structure for a NestJS module that includes a `core` and `data` folder. The `core` folder contains the business logic of the module, including DTOs, entities, interfaces, and use cases. The `data` folder contains data-related files such as models and repositories. Finally, the `stores.controller.ts` and `stores.module.ts` files are responsible for exposing the module's endpoints and for registering the module as a provider within the application.
## Contributions

If you want to contribute to this project, feel free to fork it and send your pull requests!

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Author

This CLI tool was created by [jhonvegamas](https://github.com/jhonvegamas) for personal use. Feel free to use it and
modify it according to your needs. If you find any issues or have any suggestions for improvement, please open an issue
or a pull request on the [gnest-cli](https://github.com/jhonvegamas/gnest-cli). Thank you for using GNest CLI!
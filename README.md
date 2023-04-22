Sure, here's an example of what your project's readme could look like:

# Gnest CLI

Gnest CLI is a command-line tool for generating common files used in NestJS projects.

## Installation

To install Gnest CLI, you must first have Node.js and npm installed. Then, run the following command:

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

| Command  | Abbr. | Path                |
|----------|-------|---------------------|
| dto      | d     | core/dto/           |
| entity   | e     | core/entities/      |
| interface| i     | core/interfaces/    |
| use-case | uc    | core/use-cases/     |

## Data

| Command   | Abbr. | Path                |
|-----------|-------|---------------------|
| model     | m    | data/models/        |
| repository| r     | data/repositories/  |

## App

| Command    | Abbr. | Path   |
|------------|-------|--------|
| controller | c     | /      |

## Others

| Command | Abbr. | Path |
|---------|-------|------|
| module  | N/A   | /    |

## Contributions

If you want to contribute to this project, feel free to fork it and send your pull requests!

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

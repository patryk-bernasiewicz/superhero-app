# Superhero App

## List of contents

- [Steps to push forward](#steps-to-push-forward)
- [Project notes](#project-notes)
- [Scripts](#scripts)
- [Folder structure](#folder-structure)
- [Run production build in Docker container](#run-production-build-in-docker-container)

## Steps to push forward

1. Use `create-react-app`, do cleanup, add README ✅
2. Add Dockerfile and docker-compose file with config for production build ✅
3. Add `json-server` and apply provided JSON ✅
    - Add `json-server` as a service in `docker-compose.yml` ✅
4. Setup Husky & linting before commit ✅
5. Add SCSS Modules & basic styling ✅
    - add normalize.scss ✅
    - create one global SCSS file ✅
    - create config files that modules will use/import ✅
6. Add Error Boundary wrapper ✅
7. Add paths for easier/more readable imports ✅
8. Add prettier config to React's builtin Eslint ✅
9. Add React Context for Superheros ✅
    - Add basic logic for superhero retrieval from DB ✅
10. Add basic Layout component & wrap rest of the components with it ✅
11. Add React Router with base routes within Layout ✅
12. Create RandomHeroes container component ✅
    - add HeroList component ✅
    - add RandomHeroes component tests ✅
        - add Button component ✅
        - add TextInput component ✅
        - put them together to create SearchForm component ✅
        - add Hero serach logic ✅
13. Create HeroDetails container component ✅
    - add HeroDetails component tests ✅
14. Big refactor with structure, component names, context simplicity ✅
14. Setup Cypress
    - Add E2E tests to Superhero App

## Project notes

### Tech stack

- React 17
- Typescript
- Sass (with SCSS Modules)
- React's built-in Eslint with Prettier plugin
- Craco (replaces react-scripts, used for path aliases)
- Husky
- React Testing Library
- json-server for data serving

### Q&A

#### Why is all heroes data loaded at once?

`json-server` doesn't allow to fetch 3 random items from it's database, so I had to settle with serving those from memory.

In order to provide such feature, I'd have to modify the `json-server` default behavior to the point that it would become a separate Express.js project - so I decided to go with the simpler solution.

#### Why React Context instead of an external state management solution?

In a real project I'd probably go with Redux Toolkit or other library (I'd probably use Zustand out of curiosity), but knowing that the requirements won't change in time, I decided to go with native React's Context to serve my data and custom hooks to handle side-effects.

#### 

## Scripts

### `yarn start`

Starts app in development mode.

❗ Important - you will need an `.env` file created in the root dir of your project. Fill it with following contents:

```
REACT_APP_BACKEND_URL=http://localhost:3001
```

See `.env.example` if you're still not sure what to do. 😅

You also need to have `json-server` running: `yarn json-server`

The application will run at `http://localhost:3000` and the `json-server` will be available at `http://localhost:3001`.

### `yarn build`

Creates production build of the application.

### `yarn lint`

Runs Eslint to lint Typescript files.

### `yarn test`

Runs every test suite using Jest.

### `yarn prepare`

Command that runs automatically after `yarn install`. It prepares Git hooks to run Husky on every commit.

## Folder structure

```
├── .husky                      # Husky configuration and hooks
├── public                      # React public files
├── src
|   ├── components                  # Common components
|   ├── context
|   |   └── AppContext.tsx          # Global App context
|   ├── features                    # Feature-specific components and containers (eg. pages/modules)
|   |   ├── Details                     # Hero Details view
|   |   |   ├── containers
|   |   |   └── components
|   |   └── HeroBrowser                 # Heroes Browser (main view)
|   |       ├── containers
|   |       └── components
|   ├── interfaces                  # Application-wide common interfaces
|   ├── styles                      # SCSS files that SCSS Modules import
|   ├── svg                         # SVG files (icons, loaders etc.)
|   └── utils                       # Commonly used utils (constants, functions etc.)
├── README.md
├── db.json
├── package.json
├── tsconfig.json
├── docker-compose.yml
└── Dockerfile
```

Tests are kept next to the file they're related to.

**Containers** are special type of components that are allowed to access global state (from `AppContext`). Feature-specific components are made in a way that they are as stupid as possible (not drawing directly from any context or invoking side-effects).

## Run production build in Docker container

Build the app image:

```
docker-compose build
```

Spin it up:

```
docker-compose up
```

Then access the app in your browser on port 80 (so the address should be `http://localhost/`).

The `json-server` is available at `http://localhost:3000`.
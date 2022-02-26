# Superhero App

## List of contents

- [Steps to push forward](#steps-to-push-forward)
- [Scripts](#scripts)
- [Folder structure](#folder-structure)
- [Run production build in Docker container](#run-production-build-in-docker-container)

## Steps to push forward

1. Use `create-react-app`, do cleanup, add README ✅
2. Add Dockerfile and docker-compose file with config for production build ✅
3. Add `json-server` and apply provided JSON ✅
    - Add `json-server` as a service in `docker-compose.yml` ✅
4. Setup Husky & linting before commit ✅
5. Add Error Boundary wrapper
6. Add React Context for Superheros
7. Add basic Layout component & wrap app with it
8. Add React Router with base routes within Layout
9. Create RandomHeroes container component
  - add RandomHeroes component tests
10. Create HeroDetails container component
  - add HeroDetails component tests
11. Add Cypress
  - Add E2E tests to Superhero App

## Scripts

### `yarn start`

Starts app in development mode.

❗ Important - you will need an `.env` file created in the root dir of your project. Fill it with following contents:

```
BACKEND_URL=http://localhost:3001
```

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
├── public                      # React public files
├── src
|   ├── components              # Common components
|   └── features                # Feature-specific components and containers (eg. pages/modules)
|       ├── RandomHeroes        # Random Heroes view
|           ├── components      # Random Heroes-specific components
|       └── HeroDetails         # Hero Details view
|           ├── components      # Hero Details-specific components
├── README.md
├── package.json
└── package.
```

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
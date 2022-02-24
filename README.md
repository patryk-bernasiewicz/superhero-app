# Superhero App

## List of contents

- [Steps to push forward](#steps-to-push-forward)
- [Scripts](#scripts)
- [Folder structure](#folder-structure)
- [Run production build in Docker container](#run-production-build-in-docker-container)

## Steps to push forward

1. Use `create-react-app`, do cleanup, add README ✅
2. Add Dockerfile file with config for production build ✅
3. Add `json-server` and apply provided JSON
4. Setup Husky & linting before commit
5. Add Error Boundary wrapper
6. Add React Context for Superheros
7. Add basic Layout component & wrap app with it
8. Add React Router with base routes within Layout
9. Create RandomHeroes container component
10. Create HeroDetails container component

## Scripts

### `yarn start`

Starts app in development mode.

### `yarn build`

Creates production build of the application.

### `yarn lint`

Runs Eslint to lint Typescript files.

### `yarn test`

Runs every test suite using Jest.

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
docker build -t superhero-app .
```

Spin it up:

```
docker run -it --rm -p 80:80 superhero-app
```

Then access the app in your browser on port 80 (so the address should be `http://localhost/`).
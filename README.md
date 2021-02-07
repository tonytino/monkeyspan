# MonkeySpan

![Lang:TypeScript](https://img.shields.io/badge/Lang-TypeScript-blue)
![CSS:PostCSS](https://img.shields.io/badge/CSS-PostCSS-c82829)
![Build:Rollup](https://img.shields.io/badge/Build-Rollup-ef3335)
![Compiler:Babel](https://img.shields.io/badge/Transpiler-Babel-f5da55)
![Jest Code Coverage:100%](https://img.shields.io/badge/Jest%20Code%20Coverage-100%25-15c213)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/monkeyspan/latest.svg)](https://www.npmjs.com/package/monkeyspan)
![Build status](https://github.com/tonytino/monkeyspan/workflows/Node.js%20Package/badge.svg)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://monkeyspan.netlify.app/)

## About

An example of how to make a React component package. 🐒

Tinker with this component in [Storybook].

See this package in action in this [CodeSandbox](https://codesandbox.io/s/nervous-frost-r0qcp?file=/src/App.js). 🏜

## Tooling

- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [gh cli]
- [GitHub Actions](https://github.com/features/actions)
- [Husky](https://github.com/typicode/husky)
- [Jest](https://jestjs.io/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [PostCSS](https://postcss.org/)
- [Prettier](https://prettier.io/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Storybook](https://storybook.js.org/)
- [Stylelint](https://stylelint.io/)
- [@testing-library](https://testing-library.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Usage

```jsx
import { MonkeySpan } from "monkeyspan";

function App() {
  return (
    <div>
      <MonkeySpan label="a monkey emoji">🐵</MonkeySpan>
    </div>
  );
}

export default App;
```

## Contributing

_Please note that this project follows the practices of [Semantic Versioning] and maintaining a [CHANGELOG]._

### Making Changes

1. Ensure you have the necessary dependencies installed:

   ```bash
   npm install
   ```

2. Make your changes

3. Test them in Storybook and/or using a separate app (e.g `npx create-react-app demo`):

   If you want to test your changes in a separate app, [Yalc](https://github.com/wclr/yalc) is a fantastic tool for linking purposes.

   ```bash
   # in this project's root directory, run
   yalc publish

   # then in the root directory of the app you're using to demo this package, run:
   yalc add monkeyspan && npm run start
   ```

   You should now be able to use the package in that app, e.g.

   ```jsx
   import { MonkeySpan } from "monkeyspan";
   ```

4. Make sure your changes haven't broken anything:

   Run the tests and linting.

   ```bash
   npm run test
   ```

   Ensure the build will generate successfully.

   ```bash
   npm run build
   ```

5. Commit your changes, open a pull request (`npm run pr:create`), and merge them to the `main` branch.

6. See [Publishing Releases](#publishing-releases).
### Available Scripts

| Command | Params | Example | Purpose
| - | - | - | - |
| build | none | `npm run build` | Runs `npm run build:types && npm run build:rollup` |
| build:link | none | `npm run build:link` | Generates a production build, then publishes it locally via [yalc], and copies to your clipboard the command to run to complete the link within an app directory via `npm run build && npx yalc publish && echo \"yalc add monkeyspan\" | pbcopy`. |
| build:storybook | none | `npm run build:storybook` | Generates a build for storybook using `build-storybook`. |
| build:storybook:docs | none | `npm run build:storybook:docs` | Generates a build for storybook docs using `build-storybook --docs`. |
| build:rollup | none | `npm run build:rollup` | Generates a build and source map (`./dist/bundle.js`, `./dist/bundle.es.js` & `./dist/bundle.js.map`) using Rollup & Babel. |
| build:types | none | `npm run build:types` | Runs `npx tsc --project ./tsconfig.build.json --emitDeclarationOnly`, which runs the typescript compiler to generate types files. |
| clean | none | `npm run clean` | Runs `npm run clean:eslint && npm run clean:css && npm run clean:prettier` |
| clean:artifacts | none | `npm run clean:artifacts` | Runs `rm -rv ./dist ; rm -rv .babel-config-test ; rm -rv storybook-static`, which attempts to delete artifacts created by other scripts. |
| clean:css | none | `npm run clean:css` | Runs `npx stylelint 'src/**/*.css' --fix`, which attempts to resolve all stylelint issues in the project. |
| clean:eslint | none | `npm run clean:eslint` | Runs `npx eslint --fix .`, which attempts to resolve all eslint issues in the project. |
| clean:prettier | none | `npm run clean:prettier` | Runs `npx prettier --write .`, which attempts to resolve all prettier issues in the project. |
| pr:create | none | `gh pr create --web --fill` | Pushes your branch up, opens your browser at the create PR page for your branch, and fills in commit log info automatically. |
| storybook | none | `npm run storybook` | Starts storybook on port 6006 via `start-storybook -p 6006`. |
| storybook:docs | none | `npm run storybook:docs` | Starts storybook on port 6006 in docs mode via `start-storybook -p 6006 --docs`. |
| storybook:nocache | none | `npm run storybook:nocache` | Starts storybook on port 6006 without manager caching via `start-storybook -p 6006 --no-manager-cache`. |
| tag | `--value` | `npm run tag --value=1.2.3` | Runs `npm run tag:create --value=<value>` and `npm run tag:release --value=<value>` |
| tag:create | `--value` | `npm run tag:create --value=1.2.3` | Runs `npx json -I -f ./package.json -e 'this.version=\"$npm_config_value\"' && npm i && git ci -am \"$npm_config_value\" && git tag $npm_config_value`, which updates the `package.json` version to the value provided, updates the `package-lock.json`, generates a commit for the changes, and tags the commit using the value provided. |
| tag:release | `--value` | `npm run tag:release --value=1.2.3` | Runs `git push origin $npm_config_value && gh release create $npm_config_value --title $npm_config_value --notes-file ./CHANGELOG.md`, which pushes the tag value provided to GitHub, then produces a release for it using the `gh` cli. _You will need the [gh cli](https://github.com/cli/cli) for this command to work._ |
| test | none | `npm run test` | Runs `npm run test:eslint && npm run test:css && npm run test:prettier && npm run test:types && npm run test:code` |
| test:babel | none | `npm run test:babel` | Runs `npx babel src/ --out-dir .babel-config-test --extensions ".ts,.tsx,.js,.jsx"`, providing a glimpse at how babel's current config transforms the src code. Find the output in `.babel-config-test/`. |
| test:code | none | `npm run test:code` | Runs the test suite via `npx jest`. |
| test:css | none | `npm run test:css` | Runs stylelint suite via `npx stylelint 'src/**/*.css'`. |
| test:eslint | none | `npm run test:eslint` | Runs `npx eslint .`, providing info about issues. |
| test:prettier | none | `npm run test:prettier` | Runs `npx prettier --check .`, providing info about issues. |
| test:types | none | `npm run test:types` | Runs `npx tsc --project ./tsconfig.eslint.json --noEmit`, which checks for typescript errors without emitting any files. |

### Publishing Releases

_Please note that the following should be done on the `main` branch, except for under certain circumstances, e.g. patching an older version than the last._

In order to generate a release, you need to produce a new package version and a corresponding tag for said version.

For example, let's say you want to add a component or feature to this package.

To do so, you'd simply follow the instructions in [Making Changes](#making-changes), then produce your version via:

1. Determine what type of changes you've made per [Semantic Versioning] to identify what the next version for this package will be. Check the [`package.json`](./package.json#L3)'s current version to begin.
2. Add an entry to the [CHANGELOG].
3. Run the following command with your new version in place of `<VERSION>`:

   ```bash
   npm run tag --value=<VERSION>
   ```

   If it was successful, you'll get a link like `https://github.com/tonytino/monkeyspan/releases/tag/<VERSION>` at the end of output.

4. Go to the URL provided by the script output to see your new release in GitHub.

5. Go to the [Actions tab](https://github.com/tonytino/monkeyspan/actions) for this project and you should see a job running for your release, which, if successful, will upload your new version of this package to [npm].

<!-- README META RESOURCES -->

[CHANGELOG]: ./CHANGELOG.md
[npm]: https://www.npmjs.com/package/monkeyspan
[Semantic Versioning]: https://semver.org
[Storybook]: https://monkeyspan.netlify.app/
[gh cli]: https://github.com/cli/cli
[yalc]: https://github.com/wclr/yalc

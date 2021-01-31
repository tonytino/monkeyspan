# MonkeySpan

## About

An example of how to make a React component package. 🐒

See this package in action in this [CodeSandbox](https://codesandbox.io/s/nervous-frost-r0qcp?file=/src/App.js). 🏜

Find this package on [npm]. 👾

<a href="https://github.com/tonytino/monkeyspan" title="latest">
   <img alt="latest" src="https://img.shields.io/npm/v/monkeyspan/latest.svg" />
</a>

## Tooling

- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [GitHub Actions](https://github.com/features/actions)
- [Husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Prettier](https://prettier.io/)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [Rollup](https://rollupjs.org/guide/en/)
- [Storybook](https://storybook.js.org/)

## Usage

```jsx
import { MonkeySpan } from "monkeyspan";

function App() {
  return (
    <div>
      <MonkeySpan ariaLabel="a monkey emoji">🐵</MonkeySpan>
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

2. Start up Storybook for a live development environment:

   ```bash
   npm run storybook
   ```

3. Make your changes

4. Test them in Storybook and/or using a separate app (e.g `npx create-react-app demo`):

   If you want to test your changes in a separate app, [Yalc](https://github.com/wclr/yalc) is a fantastic tool for linking purposes.

   ```bash
   # in this project's root directory, run
   yalc publish

   # then in the root directory of the app you're using to demo this package, run:
   yalc link monkeyspan && npm i && npm run start
   ```

   You should now be able to use the package in that app, e.g.

   ```jsx
   import { MonkeySpan } from "monkeyspan";
   ```

5. Make sure your changes haven't broken anything:

   Run the tests and linting.

   ```bash
   npm run test
   ```

   Ensure the build will generate successfully.

   ```bash
   npm run build
   ```

6. Commit your changes and merge them to the `main` branch

7. See [Publishing Releases](#publishing-releases)

### Available Scripts

| Command | Params | Example | Purpose
| - | - | - | - |
| build | none | `npm run build` | Runs `npm run build:rollup` |
| build:storybook | none | `npm run build:storybook` | Generates a build for storybook using `build-storybook`. |
| build:rollup | none | `npm run build:rollup` | Generates a build and source map (`bundle.js` & `bundle.js.map`) using Rollup & Babel. |
| clean | none | `npm run clean` | Runs `npm run clean:eslint` and `npm run clean:prettier` |
| clean:eslint | none | `npm run clean:eslint` | Runs `npx eslint --fix .`, which attempts to resolve all eslint issues in the project. |
| clean:prettier | none | `npm run clean:prettier` | Runs `npx prettier --write .`, which attempts to resolve all prettier issues in the project. |
| storybook | none | `npm run storybook` | Starts storybook on port 6006 via `start-storybook -p 6006`. |
| tag | `--value` | `npm run tag --value=1.2.3` | Runs `npm run tag:set --value=<value>` and `npm run tag:release --value=<value>` |
| tag:set | `--value` | `npm run tag:set --value=1.2.3` | Runs `npx json -I -f ./package.json -e 'this.version=\"$npm_config_value\"' && npm i && git ci -am \"$npm_config_value\" && git tag $npm_config_value`, which updates the `package.json` version to the value provided, updates the `package-lock.json`, generates a commit for the changes, and tags the commit using the value provided. |
| tag:release | `--value` | `npm run tag:release --value=1.2.3` | Runs `git push origin $npm_config_value && gh release create $npm_config_value --title $npm_config_value --notes-file ./CHANGELOG.md`, which pushes the tag value provided to GitHub, then produces a release for it using the `gh` cli. _You will need the [gh cli](https://github.com/cli/cli) for this command to work._ |
| test | none | `npm run test` | Runs `npm run test:eslint` and `npm run test:prettier` |
| test:babel | none | `npm run test:babel` | Runs `npx babel src --out-dir .babel-config-test/`, providing a glimpse at how babel's current config transforms the src code. Find the output in `.babel-config-test/`. |
| test:eslint | none | `npm run test:eslint` | Runs `npx eslint .`, providing info about issues. |
| test:prettier | none | `npm run test:prettier` | Runs `npx prettier --check .`, providing info about issues. |

### Publishing Releases

_Please note that the following should be done on the `main` branch, except for under certain circumstances, e.g. patching an older version than the last._

In order to generate a release, you need to produce a new package version and a corresponding tag for said version.

For example, let's say you want to add a component or feature to this package.

To do so, you'd simply add your component/feature, commit your work, then produce your version via:

1. Determine what type of changes you've made per [Semantic Versioning] to identify what the next version for this package will be. Check the [`package.json`](./package.json)'s current version to begin.
2. Add an entry to the [CHANGELOG]
3. Run the following command with your new version in place of `<VERSION>`:

   ```bash
   npm run tag --value=<VERSION>
   ```

   If it was successful, you'll get a link like `https://github.com/tonytino/monkeyspan/releases/tag/<VERSION>` at the end of output.

4. Go to the URL provided by the script output to see your new release in GitHub.

5. Go to the [Actions tab](https://github.com/tonytino/monkeyspan/actions) for this project and you should see a job running for your release, which, if successful, will upload your new version of this package to [npm].

<!-- README META RESOURCES -->

[Semantic Versioning]: https://semver.org
[CHANGELOG]: ./CHANGELOG.md
[npm]: https://www.npmjs.com/package/monkeyspan

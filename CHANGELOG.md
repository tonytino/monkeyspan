# CHANGELOG

Based on [Keep a CHANGELOG]. 🪵

## [0.6.0] - 2021-02-06

### Changes

- Add support for native CSS, CSS Modules, and Stage 2 CSS features (`postcss-preset-env`)
  - Add and configure `postcss`
  - Add support for CSS mocking during testing
  - Configure `rollup` to process CSS
  - Configure Storybook's webpack to support new css features
- Add new project-wide css files (`src/styles`)
- Add and configure Stylelint
- Add configuration file for `lint-staged`
- Add some features to example component to demonstrate CSS functionality
- Add and update scripts
- Update README
- Upgrade all deps
- Add new GitHub CI check
- Remove engine specification from `package.json`

## [0.5.1] - 2021-02-03

### Changes

- Add workflow scripts for CI (testing) in push/pull requests to `main`
- Update various deps
- Remove codeql-analysis.yml; no TS support

## [0.5.0] - 2021-02-03

### Changes

- Convert to [TypeScript](https://www.typescriptlang.org/)
- Update `.github/workflows/npm-publish.yml` to use node 14
- Update `package.json` to designate node 14
- Add scripts
- Update README
- Update various deps

## [0.4.1] - 2021-02-01

### Changes

- Add eslint plugins for testing-library

## [0.4.0] - 2021-02-01

### Changes

- Add and configure Jest
- Add and configure @testing-library/react, @testing-library/dom,
  @testing-library/jest-dom, and @testing-library/user-event
- Add a test suite for `<MonkeySpan />`

## [0.3.2] - 2021-02-01

### Changes

- Code formatting

## [0.3.1] - 2021-02-01

### Changes

- Create `SECURITY.md`
- Create `codeql-analysis.yml`
- Create `dependabot.yml`
- Add and configure babel plugin to remove prop types
- Remove reference to non-existent storybook dep
- Update README

## [0.3.0] - 2021-02-01

### Changes

- Update README
- Fix issue preventing lint-staged from fixing jsx files
- Add default props for MonkeySpan
- Add and configure storybook, with MonkeySpan story
- Add addons for storybook

## [0.2.3] - 2021-01-31

### Changes

- Update instructions for publishing releases

## [0.2.2] - 2021-01-31

### Changes

- Automate more of the `tag:release` script

## [0.2.1] - 2021-01-31

### Changes

- Add [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs)

## [0.2.0] - 2021-01-31

### Changes

- Add [prop-types](https://www.npmjs.com/package/prop-types)
- Scripts for generating tags and releases
- Add a CHANGELOG

<!-- CHANGELOG META RESOURCES -->

[keep a changelog]: https://keepachangelog.com

<!-- RELEASE LINKS -->

[0.6.0]: https://github.com/tonytino/monkeyspan/releases/tag/0.6.0
[0.5.1]: https://github.com/tonytino/monkeyspan/releases/tag/0.5.1
[0.5.0]: https://github.com/tonytino/monkeyspan/releases/tag/0.5.0
[0.4.1]: https://github.com/tonytino/monkeyspan/releases/tag/0.4.1
[0.4.0]: https://github.com/tonytino/monkeyspan/releases/tag/0.4.0
[0.3.2]: https://github.com/tonytino/monkeyspan/releases/tag/0.3.2
[0.3.1]: https://github.com/tonytino/monkeyspan/releases/tag/0.3.1
[0.3.0]: https://github.com/tonytino/monkeyspan/releases/tag/0.3.0
[0.2.3]: https://github.com/tonytino/monkeyspan/releases/tag/0.2.3
[0.2.2]: https://github.com/tonytino/monkeyspan/releases/tag/0.2.2
[0.2.1]: https://github.com/tonytino/monkeyspan/releases/tag/0.2.1
[0.2.0]: https://github.com/tonytino/monkeyspan/releases/tag/0.2.0

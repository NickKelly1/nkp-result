# @nkp/result

[![npm version](https://badge.fury.io/js/%40nkp%2Fresult.svg)](https://www.npmjs.com/package/@nkp/result)
[![deploy status](https://github.com/NickKelly1/nkp-result/actions/workflows/release.yml/badge.svg)](https://github.com/NickKelly1/nkp-result/actions/workflows/release.yml)
[![known vulnerabilities](https://snyk.io/test/github/NickKelly1/nkp-result/badge.svg)](https://snyk.io/test/github/NickKelly1/nkp-result)

Minimal zero dependency utility library for the Result type. Result represents the output of an operation that either succeded or failed.

```ts
import { Result } from '@nkp/result';

function work(): Result<number, string> {
  const input = 'this is user input';
  if (input.length >= 5){ 
    return Result.fail('input must be less-than 5 characters long');
  }
  return Result.success(input.length);
}


const result = work();

if (Result.isSuccess(result)) {
  const success: number = reuslt.value;
}

if (Result.isFail(result)) {
  const message: string = result.value;
}
```

## Table of contents

- [Exports](#exports)
- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
  - [pnpm](#pnpm)
- [Publishing](#publishing)

## Exports

`@nkp/result` exports both CommonJS and ES modules.

## Installation

### npm

```sh
npm install @nkp/result
```

### yarn

```sh
yarn add @nkp/result
```

### pnpm

```sh
pnpm add @nkp/result
```

## Publishing

To a release a new version:

1. Update the version number in package.json
2. Push the new version to the `master` branch on GitHub
3. Create a `new release` on GitHub for the latest version

This will trigger a GitHub action that tests and publishes the npm package.

# Changelog

## 2.0.0 - 2022-03-04

Major release

### Breaking Changes

#### Changed

- `Result.Type.Success` -> `Result.Type.Ok`
- `Result.Type.Fail` -> `Result.Type.Err`
- `Result.Success` -> `Result.Ok`
- `Result.success` -> `Result.ok`
- `Result.isSuccess` -> `Result.isOk`
- `Result.Fail` -> `Result.Err`
- `Result.fail` -> `Result.err`
- `Result.isFail` -> `Result.isErr`
- `Success` -> `Ok`
- `success` -> `toOk`
- `isSuccess` -> `isOk`
- `Fail` -> `Err`
- `fail` -> `toErr`
- `isFail` -> `isErr`

### Non-Breaking Changes

#### Added

- `Result.unwrap`

## 1.0.4 - 2022-02-07

### Changed

- Fixed package.json exports

## 1.0.3 - 2022-02-07

### Changed

- Updated dependencies
- Changed code comments

## 1.0.2 - 2022-02-07

### Changed

- Updated readme.md
- Devop: Updated CI process
- Devop: Updated build

## 1.0.1 - 2022-01-19

### Changed

- Updated readme.md

### Added

## 1.0.0 - 2022-01-19

Released v1.0.0

### Added

- Added support for non-namespaced imports (don't need to use the Result
  namespace)

## 0.0.6 - 2022-01-02

### Changed

- Went back to `Result` namespace
- Updated Readme.md
- Updated dependencies

## 0.0.5 - 2021-12-31

### Changed

- Updated readme.md

## 0.0.4 - 2021-12-31

### Changed

- Removed `Result` namespace

## 0.0.3 - 2021-12-31

### Added

### Changed

- Updated readme.md
- Updated dependencies
- Switched from `npm` to `pnpm`

### Removed

- `package.json#engines#node` requirement

## 0.0.1 - 2021-12-30

### Added

- Added `Result`

### Changed

### Removed

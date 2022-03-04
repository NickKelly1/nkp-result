/**
 * Result represents the output of an operation that may have succeded or failed
 *
 * Result is the discriminated union of the {@link Result.Ok} and
 * {@link Result.Err} types, distinguished by their `type` property
 *
 * To determine the type of a `Result` it's recommended to use one of the
 * @see [type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)
 * functions: {@link Result.isOk} or {@link Result.isErr}
 */
export type Result<T, F = unknown> =
  | Result.Ok<T>
  | Result.Err<F>;

/**
 * Fail type
 *
 * @alias {@link Result.Err}
 */
export type Err<F = unknown> = Result.Err<F>;

/**
 * Success type
 *
 * @alias {@link Result.Ok}
 */
export type Ok<T> = Result.Ok<T>;

export namespace Result {
  /**
   * Type of result
   */
  export enum Type {
    Ok = 'Ok',
    Err = 'Err',
  }

  /**
   * Base result
   */
  export interface Base<U, T extends Type> {
    type: T
    value: U
  }

  /**
   * Success type
   */
  export interface Ok<T> extends Base<T, Type.Ok> {}

  /**
   * Failure type
   */
  export interface Err<F = unknown> extends Base<F, Type.Err> {}

  /**
   * Is the result an "ok"
   *
   * @param output    result
   * @returns         whether the output is an "ok"
   */
  export function isOk<T, F>(output: Result<T, F>): output is Result.Ok<T> {
    return output.type === Result.Type.Ok;
  }

  /**
   * Is the result an "err"
   *
   * @param result    result
   * @returns         whether the result is an "err"
   */
  export function isErr<T, F>(result: Result<T, F>): result is Result.Err<F> {
    return result.type === Result.Type.Err;
  }

  /**
   * Create an "ok" result
   *
   * @param value     ok value
   * @returns         ok result
   */
  export function ok<T>(value: T): Result.Ok<T> {
    return {
      type: Result.Type.Ok,
      value,
    };
  }

  /**
   * Create an "err" result
   *
   * @param value   err value
   * @returns       err result
   */
  export function err<F>(value: F): Result.Err<F> {
    return {
      type: Result.Type.Err,
      value,
    };
  }

  /**
   * Assert the result is Ok and return it's inner value
   *
   * @param result    target result
   * @returns         inner value
   * @throws          Error
   */
  export function unwrap<T, E>(result: Result<T, E>): T {
    if (isErr(result)) {
      throw new Error('failed to unwrap result: result is err');
    }
    return result.value;
  }
}

/**
 * Type of result
 * @alias {@link Result.Type}
 */
export const Type = Result.Type;

/**
 * Create an "ok" result
 *
 * @param value     ok value
 * @returns         ok result
 *
 * @alias {@link Result.ok}
 */
export const toOk = Result.ok;

/**
 * Create an "err" result
 *
 * @param value   err value
 * @returns       err result
 *
 * @alias {@link Result.err}
 */
export const toErr = Result.err;

/**
 * Is the result an "ok"
 *
 * @param output    result
 * @returns         whether the output is an "ok"
 *
 * @alias {@link Result.isOk}
 */
export const isOk = Result.isOk;

/**
 * Is the result an "err"
 *
 * @param result    result
 * @returns         whether the result is an "err"
 *
 * @alias {@link Result.isErr}
 */
export const isErr = Result.isErr;
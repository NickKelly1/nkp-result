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
   * Is the output a "success" result
   *
   * @param output    result output
   * @returns         whether the output is a "success" result
   */
  export function isOk<T, F>(output: Result<T, F>): output is Result.Ok<T> {
    return output.type === Result.Type.Ok;
  }

  /**
   * Is the output a "fail" result
   *
   * @param output    result output
   * @returns         whether the output is a "fail" result
   */
  export function isErr<T, F>(output: Result<T, F>): output is Result.Err<F> {
    return output.type === Result.Type.Err;
  }

  /**
   * Create a "success" result
   *
   * @param value     success value
   * @returns         success result
   */
  export function ok<T>(value: T): Result.Ok<T> {
    return {
      type: Result.Type.Ok,
      value,
    };
  }

  /**
   * Create a "fail" result
   *
   * @param value   fail value
   * @returns       fail result
   */
  export function err<F>(value: F): Result.Err<F> {
    return {
      type: Result.Type.Err,
      value,
    };
  }
}

/**
 * Type of result
 * @alias {@link Result.Type}
 */
export const Type = Result.Type;

/**
 * Create a "success" result
 *
 * @param value     success value
 * @returns         success result
 *
 * @alias {@link Result.ok}
 */
export const ok = Result.ok;

/**
 * Create a "fail" result
 *
 * @param value   fail value
 * @returns       fail result
 *
 * @alias {@link Result.err}
 */
export const err = Result.err;

/**
 * Is the output a "success" result
 *
 * @param output    result output
 * @returns         whether the output is a "success" result
 *
 * @alias @see {@link Result.isOk}
 */
export const isOk = Result.isOk;

/**
 * Create a "fail" result
 *
 * @param value   fail value
 * @returns       fail result
 *
 * @alias {@link Result.isErr}
 */
export const isErr = Result.isErr;
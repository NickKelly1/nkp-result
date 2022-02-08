/**
 * Result represents the output of an operation that may have succeded or failed
 *
 * Result is the discriminated union of the {@link Result.Success} and
 * {@link Result.Fail} types, distinguished by their `type` property
 *
 * To determine the type of a `Result` it's recommended to use one of the
 * [type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)
 * functions: {@link Result.isSuccess} or {@link Result.isFail}
 */
export type Result<T, F = unknown> =
  | Result.Success<T>
  | Result.Fail<F>;

/**
 * Fail type
 *
 * @alias {@link Result.Fail}
 */
export type Fail<F = unknown> = Result.Fail<F>;

/**
 * Success type
 *
 * @alias {@link Result.Success}
 */
export type Success<T> = Result.Success<T>;

export namespace Result {
  /**
   * Type of result
   */
  export enum Type {
    Success = 'Success',
    Fail = 'Fail',
  }

  /**
   * Base result
   */
  export interface BaseResult<U, T extends Type> {
    type: T
    value: U
  }

  /**
   * Success type
   */
  export interface Success<T> extends BaseResult<T, Type.Success> {}

  /**
   * Failure type
   */
  export interface Fail<F = unknown> extends BaseResult<F, Type.Fail> {}


  /**
   * Is the output a "success" result
   *
   * @param output    result output
   * @returns         whether the output is a "success" result
   */
  export function isSuccess<T, F>(output: Result<T, F>): output is Result.Success<T> {
    return output.type === Result.Type.Success;
  }

  /**
   * Is the output a "fail" result
   *
   * @param output    result output
   * @returns         whether the output is a "fail" result
   */
  export function isFail<T, F>(output: Result<T, F>): output is Result.Fail<F> {
    return output.type === Result.Type.Fail;
  }

  /**
   * Create a "success" result
   *
   * @param value     success value
   * @returns         success result
   */
  export function success<T>(value: T): Result.Success<T> {
    return {
      type: Result.Type.Success,
      value,
    };
  }

  /**
   * Create a "fail" result
   *
   * @param value   fail value
   * @returns       fail result
   */
  export function fail<F>(value: F): Result.Fail<F> {
    return {
      type: Result.Type.Fail,
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
 * @alias {@link Result.success}
 */
export const success = Result.success;

/**
 * Create a "fail" result
 *
 * @param value   fail value
 * @returns       fail result
 *
 * @alias {@link Result.fail}
 */
export const fail = Result.fail;

/**
 * Is the output a "success" result
 *
 * @param output    result output
 * @returns         whether the output is a "success" result
 *
 * @alias @see {@link Result.isSuccess}
 */
export const isSuccess = Result.isSuccess;

/**
 * Create a "fail" result
 *
 * @param value   fail value
 * @returns       fail result
 *
 * @alias {@link Result.isFail}
 */
export const isFail = Result.isFail;
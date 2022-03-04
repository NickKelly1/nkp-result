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
export type Result<T, E = unknown> =
  | Result.Ok<T>
  | Result.Err<E>;

export namespace Result {
  /** Ok discriminator type */
  export type OK = 'OK';

  /** Ok discriminator value */
  export const OK: OK = 'OK';

  /** Err discriminator type */
  export type ERR = 'ERR';

  /** Err discriminator value */
  export const ERR: ERR = 'ERR';

  /** Ok type */
  export interface Ok<T> {
    type: OK;
    value: T;
  }

  /** ERR type */
  export interface Err<E = unknown> {
    type: ERR;
    value: E;
  }

  /**
   * Is the result an "ok"
   *
   * @param output    result
   * @returns         whether the output is an "ok"
   */
  export function isOk<T, F>(output: Result<T, F>): output is Result.Ok<T> {
    return output.type === Result.OK;
  }

  /**
   * Is the result an "err"
   *
   * @param result    result
   * @returns         whether the result is an "err"
   */
  export function isErr<T, F>(result: Result<T, F>): result is Result.Err<F> {
    return result.type === Result.ERR;
  }

  /**
   * Create an "ok" result
   *
   * @param value     ok value
   * @returns         ok result
   */
  export function ok<T>(value: T): Result.Ok<T> {
    return {
      type: OK,
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
      type: ERR,
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

/** Ok discriminator type */
export type OK = Result.OK

/** Ok discriminator value */
export const OK = Result.OK;

/** Err discriminator type */
export type ERR = Result.ERR;

/** Err discriminator value */
export const ERR = Result.ERR;

/**
 * Err type
 *
 * @alias {@link Result.Err}
 */
export type Err<F = unknown> = Result.Err<F>;

/**
 * Ok type
 *
 * @alias {@link Result.Ok}
 */
export type Ok<T> = Result.Ok<T>;

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

/**
 * Assert the result is Ok and return it's inner value
 *
 *
 * @param result    target result
 * @returns         inner value
 * @throws          Error
 *
 * @alias {@link Result.unwrap}
 */
export const unwrapOk = Result.unwrap;

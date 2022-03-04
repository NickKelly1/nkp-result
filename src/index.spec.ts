import { isErr, isOk, Result, toOk, Type, toErr } from '.';

describe('Result', () => {
  // namespaced
  describe('Result.unwrap', () => {
    it('should throw if is err', () => {
      expect(() => Result.unwrap(Result.err('err'))).toThrow();
    });
    it('should succeed if is ok', () => {
      expect(Result.unwrap(Result.ok(5))).toEqual(5);
    });
  });
  describe('Result.ok', () => {
    it('should create an ok type', () => {
      expect(Result.ok(5)).toEqual({ type: Result.Type.Ok, value: 5, });
    });
  });
  describe('Result.isOk', () => {
    it('should detect an ok', () => {
      expect(Result.isOk(Result.ok(5))).toBeTruthy();
    });
    it('should detect an err', () => {
      expect(Result.isOk(Result.err(5))).toBeFalsy();
    });
  });
  describe('Result.err', () => {
    it('should create an err type', () => {
      expect(Result.err(5)).toEqual({ type: Result.Type.Err, value: 5, });
    });
  });
  describe('Result.isErr', () => {
    it('should detect an ok', () => {
      expect(Result.isErr(Result.ok(5))).toBeFalsy();
    });
    it('should detect an err', () => {
      expect(Result.isErr(Result.err(5))).toBeTruthy();
    });
  });

  // not namespaced
  describe('toOk', () => {
    it('should create an ok type', () => {
      expect(toOk(5)).toEqual({ type: Type.Ok, value: 5, });
    });
  });
  describe('isOk', () => {
    it('should detect an ok', () => {
      expect(isOk(toOk(5))).toBeTruthy();
    });
    it('should detect an err', () => {
      expect(isOk(toErr(5))).toBeFalsy();
    });
  });
  describe('toErr', () => {
    it('should create an err type', () => {
      expect(toErr(5)).toEqual({ type: Type.Err, value: 5, });
    });
  });
  describe('isErr', () => {
    it('should detect an ok', () => {
      expect(isErr(toOk(5))).toBeFalsy();
    });
    it('should detect an err', () => {
      expect(isErr(toErr(5))).toBeTruthy();
    });
  });
});
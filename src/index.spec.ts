import { isErr, isOk, Result, ok, Type, err } from '.';

describe('Result', () => {
  // namespaced
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
  describe('ok', () => {
    it('should create an ok type', () => {
      expect(ok(5)).toEqual({ type: Type.Ok, value: 5, });
    });
  });
  describe('isOk', () => {
    it('should detect an ok', () => {
      expect(isOk(ok(5))).toBeTruthy();
    });
    it('should detect an err', () => {
      expect(isOk(err(5))).toBeFalsy();
    });
  });
  describe('err', () => {
    it('should create an err type', () => {
      expect(err(5)).toEqual({ type: Type.Err, value: 5, });
    });
  });
  describe('isErr', () => {
    it('should detect an ok', () => {
      expect(isErr(ok(5))).toBeFalsy();
    });
    it('should detect an err', () => {
      expect(isErr(err(5))).toBeTruthy();
    });
  });
});
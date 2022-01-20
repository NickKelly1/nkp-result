import { isFail, isSuccess, Result, success, Type, fail } from '.';

describe('Result', () => {
  // namespaced
  describe('Result.success', () => {
    it('should create a success type', () => {
      expect(Result.success(5)).toEqual({ type: Result.Type.Success, value: 5, });
    });
  });
  describe('Result.isSuccess', () => {
    it('should detect a success', () => {
      expect(Result.isSuccess(Result.success(5))).toBeTruthy();
    });
    it('should detect a fail', () => {
      expect(Result.isSuccess(Result.fail(5))).toBeFalsy();
    });
  });
  describe('Result.fail', () => {
    it('should create a fail type', () => {
      expect(Result.fail(5)).toEqual({ type: Result.Type.Fail, value: 5, });
    });
  });
  describe('Result.isFalse', () => {
    it('should detect a success', () => {
      expect(Result.isFail(Result.success(5))).toBeFalsy();
    });
    it('should detect a fail', () => {
      expect(Result.isFail(Result.fail(5))).toBeTruthy();
    });
  });

  // not namespaced
  describe('success', () => {
    it('should create a success type', () => {
      expect(success(5)).toEqual({ type: Type.Success, value: 5, });
    });
  });
  describe('isSuccess', () => {
    it('should detect a success', () => {
      expect(isSuccess(success(5))).toBeTruthy();
    });
    it('should detect a fail', () => {
      expect(isSuccess(fail(5))).toBeFalsy();
    });
  });
  describe('fail', () => {
    it('should create a fail type', () => {
      expect(fail(5)).toEqual({ type: Type.Fail, value: 5, });
    });
  });
  describe('isFalse', () => {
    it('should detect a success', () => {
      expect(isFail(success(5))).toBeFalsy();
    });
    it('should detect a fail', () => {
      expect(isFail(fail(5))).toBeTruthy();
    });
  });
});
import { Result } from '.';

describe('Result', () => {
  describe('success', () => {
    it('should create a success type', () => {
      expect(Result.success(5)).toEqual({ type: Result.Type.Success, value: 5, });
    });
  });
  describe('isSuccess', () => {
    it('should detect a success', () => {
      expect(Result.isSuccess(Result.success(5))).toBeTruthy();
    });
    it('should detect a fail', () => {
      expect(Result.isSuccess(Result.fail(5))).toBeFalsy();
    });
  });
  describe('fail', () => {
    it('should create a fail type', () => {
      expect(Result.fail(5)).toEqual({ type: Result.Type.Fail, value: 5, });
    });
  });
  describe('isFalse', () => {
    it('should detect a success', () => {
      expect(Result.isFail(Result.success(5))).toBeFalsy();
    });
    it('should detect a fail', () => {
      expect(Result.isFail(Result.fail(5))).toBeTruthy();
    });
  });
});
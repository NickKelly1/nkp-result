import { isFail, isSuccess, success, Type, fail } from '.';

describe('Result', () => {
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
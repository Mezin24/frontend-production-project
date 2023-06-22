import { classNames } from './classNames';

describe('classNames', () => {
  test('correct', () => {
    expect(classNames('sometest')).toBe('sometest');
  });
});

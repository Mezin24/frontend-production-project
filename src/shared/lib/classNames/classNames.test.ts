import { classNames } from './classNames';

describe('classNames', () => {
  test('with onlu first param', () => {
    const expected = 'sometest';
    expect(classNames('sometest')).toBe(expected);
  });

  test('with additional classes', () => {
    const expected = 'sometest class1 class2';
    expect(classNames('sometest', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'sometest class1 class2 clicked hovered';
    expect(classNames(
      'sometest',
      { clicked: true, hovered: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('with mods falls', () => {
    const expected = 'sometest class1 class2 hovered';
    expect(classNames(
      'sometest',
      { clicked: false, hovered: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'sometest class1 class2 clicked';
    expect(classNames(
      'sometest',
      { clicked: true, hovered: undefined },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
});

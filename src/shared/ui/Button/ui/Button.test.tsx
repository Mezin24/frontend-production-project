import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ButtonTheme } from './Button';

describe('button', () => {
  test('render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('add class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
  });
});

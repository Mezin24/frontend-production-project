import { FC, HtmlHTMLAttributes } from 'react';
import classes from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(classes.Button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

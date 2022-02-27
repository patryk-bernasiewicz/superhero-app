import { HTMLProps } from 'react';
import cx from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  kind?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ className, kind, ...buttonProps }: ButtonProps) => (
  <button
    className={cx(styles.button, className, {
      [styles.primary]: kind === 'primary',
      [styles.secondary]: kind === 'secondary',
    })}
    {...buttonProps}
  />
);

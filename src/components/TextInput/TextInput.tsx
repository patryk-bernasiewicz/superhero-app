import React, { HTMLProps } from 'react';
import cx from 'classnames';

import styles from './TextInput.module.scss';

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

export const TextInput = ({ label, ...inputProps }: TextInputProps) => {
  const { value } = inputProps;

  if (typeof value === 'undefined') {
    throw new Error('Cannot use TextInput as an uncontrolled input!');
  }

  return (
    <label
      className={cx(styles.label, {
        [styles.hasValue]: value.toString().length,
      })}
    >
      <span className={styles.labelText}>{label}</span>
      <input className={styles.input} {...inputProps} />
    </label>
  );
};

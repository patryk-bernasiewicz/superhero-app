import React, { HTMLProps, useEffect, useRef, useState } from 'react';
import cx from 'classnames';

import styles from './TextInput.module.scss';

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

export const TextInput = ({ label, ...inputProps }: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState<boolean>(
    Boolean((inputRef.current as HTMLInputElement)?.value)
  );

  // handle hasValue for uncontrolled inputs
  useEffect(() => {
    if (inputProps.value || !inputRef.current) {
      return;
    }
    const inputElement = inputRef.current as HTMLInputElement;

    const inputHandler = ({ target }: Event) => {
      const { value } = target as HTMLInputElement;
      setHasValue(Boolean(value.toString().length));
    };

    inputElement.addEventListener('input', inputHandler);
  }, [inputProps.value]);

  return (
    <label
      className={cx(styles.label, {
        [styles.hasValue]: hasValue,
      })}
    >
      <span className={styles.labelText}>{label}</span>
      <input ref={inputRef} className={styles.input} {...inputProps} />
    </label>
  );
};

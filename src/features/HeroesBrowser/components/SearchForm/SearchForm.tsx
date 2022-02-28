import { ChangeEvent } from 'react';

import { TextInput } from '@components/TextInput/TextInput';
import { jestIdsMap } from '@utils/jestHelpers';
import messages from '@utils/messages';

import styles from './SearchForm.module.scss';
interface SearchFormProps {
  isDisabled?: boolean;
  value?: string;
  onChange: (value: string) => void;
}

export const SearchForm = ({
  isDisabled,
  value = '',
  onChange,
}: SearchFormProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) {
      return;
    }

    const {
      target: { value },
    } = event;
    onChange(value);
  };

  return (
    <form
      className={styles.form}
      data-testid={jestIdsMap.heroesSearch.form.formElement}
    >
      <TextInput
        aria-disabled={isDisabled}
        disabled={isDisabled}
        label="Search Supeheroes"
        onChange={handleChange}
        value={value}
        data-testid={jestIdsMap.heroesSearch.form.input}
      />
      <div className={styles.tip}>{messages.minCharactersToSearch}</div>
    </form>
  );
};

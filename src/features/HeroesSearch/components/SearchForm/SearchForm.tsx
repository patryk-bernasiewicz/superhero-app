import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { TextInput } from '@components/TextInput/TextInput';
import { SuperheroContext } from '@context/SuperheroContext/SuperheroContext';

export const SearchForm = () => {
  const debounceTimer = useRef<ReturnType<typeof setTimeout>>();
  const [searchValue, setSearchValue] = useState<string>('');

  const { handleHeroSearch } = useContext(SuperheroContext);

  const clearTimer = () => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
  };

  const handleSearch = useCallback((searchText: string) => {
    clearTimer();
    debounceTimer.current = setTimeout(() => {
      handleHeroSearch(searchText);
    }, 250);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
    handleSearch(value);
  };

  // Clear timer when component unmounts
  useEffect(() => clearTimer, []);

  return (
    <form>
      <TextInput
        label="Search Supeheroes"
        onChange={handleChange}
        value={searchValue}
      />
    </form>
  );
};

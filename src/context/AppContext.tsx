import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

import { Superhero } from '@interfaces/superhero.interface';
import { fetchSuperheroes } from '@utils/api';
import { useDebouncedSearch } from '@utils/hooks/useDebouncedSearch';
import { useRandomItems } from '@utils/hooks/useRandomItems';

export interface AppState {
  areHeroesFetched: boolean;
  areHeroesFetching: boolean;
  displayedHeroes?: Superhero[];
  hasSearchResults: boolean;
  searchText?: string;
  setSearchText: (searchText: string) => void;
  superheroes?: Superhero[];
}

export const initialState: AppState = {
  areHeroesFetched: false,
  areHeroesFetching: true,
  displayedHeroes: undefined,
  hasSearchResults: false,
  searchText: '',
  setSearchText: () => {},
  superheroes: undefined,
};

export const AppContext = createContext<AppState>(initialState);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [areHeroesFetched, setHeroesFetched] = useState(false);

  const [superheroes, setSuperheroes] = useState<Superhero[] | undefined>();
  const [searchText, setSearchText] = useState('');
  const { isSearching, filteredResults } = useDebouncedSearch<Superhero>(
    searchText,
    superheroes,
    'name'
  );
  const randomSuperheroes = useRandomItems<Superhero>(superheroes);
  const hasSearchResults = typeof filteredResults !== 'undefined';

  const displayedHeroes = useMemo(
    () => (hasSearchResults ? filteredResults : randomSuperheroes),
    [hasSearchResults, filteredResults, randomSuperheroes]
  );

  useEffect(() => {
    fetchSuperheroes()
      .then((superheroes: Superhero[]) => {
        setSuperheroes(superheroes);
        setHeroesFetched(true);
      })
      .catch(() => {
        throw new Error(
          'Could not connect to the database. Please try again later. (did you remember to run `yarn json-server`?)'
        );
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const areHeroesFetching = useMemo(
    () => isSearching || !areHeroesFetched,
    [isSearching, areHeroesFetched]
  );

  return (
    <AppContext.Provider
      value={{
        areHeroesFetched,
        areHeroesFetching,
        hasSearchResults,
        superheroes,
        searchText,
        setSearchText,
        displayedHeroes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

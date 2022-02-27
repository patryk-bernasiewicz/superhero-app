import { ReactNode, useEffect, useMemo, useState } from 'react';

import { SuperheroContext } from './SuperheroContext';
import { useRandomHeroes } from '@utils/hooks/useRandomHeroes';
import { useSuperheroes } from '@utils/hooks/useSuperheroes';
import { Superhero } from '@interfaces/superhero.interface';

interface SuperheroContextProviderProps {
  children: ReactNode;
}

export const SuperheroContextProvider = ({
  children,
}: SuperheroContextProviderProps) => {
  const { areHeroesLoading, error, superheroes } = useSuperheroes();
  const randomSuperheroes = useRandomHeroes(superheroes);
  const [searchResults, setSearchResults] = useState<Superhero[] | undefined>();

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  const displayedSuperheroes = useMemo(() => {
    if (typeof searchResults !== 'undefined') {
      return searchResults;
    }
    return randomSuperheroes;
  }, [searchResults, randomSuperheroes]);

  const handleHeroSearch = (searchText: string) => {
    if (!searchText.length) {
      setSearchResults(undefined);
      return;
    }

    const filteredSuperheroes = superheroes.filter(({ name }: Superhero) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredSuperheroes);
  };

  return (
    <SuperheroContext.Provider
      value={{
        areHeroesLoading,
        displayedSuperheroes,
        handleHeroSearch,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

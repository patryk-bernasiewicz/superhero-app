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
  const [heroDetails, setHeroDetail] = useState<Superhero>();

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

  const findHeroDetails = (slug: string) => {
    if (!superheroes.length) {
      return;
    }

    const superhero = superheroes.find(
      (superhero) => superhero.slug.toLowerCase() === slug.toLowerCase()
    );
    setHeroDetail(superhero);
  };

  return (
    <SuperheroContext.Provider
      value={{
        areHeroesLoading,
        displayedSuperheroes,
        handleHeroSearch,
        findHeroDetails,
        heroDetails,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

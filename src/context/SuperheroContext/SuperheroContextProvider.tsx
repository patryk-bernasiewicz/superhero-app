import { ReactNode, useEffect, useState } from 'react';

import { Superhero } from '@interfaces/superhero.interface';
import { fetchSuperheroes } from '@utils/api';
import { SuperheroContext } from './SuperheroContext';
import { useRandomHeroes } from '@utils/hooks/useRandomHeroes';

interface SuperheroContextProviderProps {
  children: ReactNode;
}

export const SuperheroContextProvider = ({
  children,
}: SuperheroContextProviderProps) => {
  const [areHeroesLoading, setHeroesLoading] = useState<boolean>(false);
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const randomSuperheroes = useRandomHeroes(superheroes);

  useEffect(() => {
    setHeroesLoading(true);
    fetchSuperheroes().then((superheroes) => {
      setSuperheroes(superheroes);
      setHeroesLoading(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (areHeroesLoading || !superheroes.length) {
      return;
    }
  }, [areHeroesLoading, superheroes.length]);

  return (
    <SuperheroContext.Provider
      value={{
        areHeroesLoading,
        superheroes,
        randomSuperheroes,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

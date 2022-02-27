import { ReactNode, useEffect } from 'react';

import { SuperheroContext } from './SuperheroContext';
import { useRandomHeroes } from '@utils/hooks/useRandomHeroes';
import { useSuperheroes } from '@utils/hooks/useSuperheroes';

interface SuperheroContextProviderProps {
  children: ReactNode;
}

export const SuperheroContextProvider = ({
  children,
}: SuperheroContextProviderProps) => {
  const { areHeroesLoading, error, superheroes } = useSuperheroes();
  const randomSuperheroes = useRandomHeroes(superheroes);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

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

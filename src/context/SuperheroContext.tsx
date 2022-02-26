import { createContext, ReactNode, useEffect, useState } from 'react';

import { Superhero } from '@interfaces/superhero.interface';
import { fetchSuperheroes } from '@utils/api';

interface SuperheroState {
  superheroes: Superhero[];
  randomHeroSelection: number[];
  superheroDetails?: Superhero;
}

interface SuperheroContextProviderProps {
  children: ReactNode;
}

const SuperheroContext = createContext<SuperheroState>({} as SuperheroState);

export const SuperheroContextProvider = ({
  children,
}: SuperheroContextProviderProps) => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    fetchSuperheroes().then((superheroes) => setSuperheroes(superheroes));
  }, []);

  return (
    <SuperheroContext.Provider
      value={{
        superheroes,
        randomHeroSelection: [],
        superheroDetails: undefined,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

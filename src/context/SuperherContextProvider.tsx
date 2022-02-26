import { ReactNode, useEffect, useRef, useState } from 'react';

import { Superhero } from '@interfaces/superhero.interface';
import { fetchSuperheroes } from '@utils/api';
import {
  RANDOM_HEROES_REFRESH_TIME,
  RANDOM_HERO_DEFAULT_COUNT,
} from '@utils/constants';
import { getUniqueRandomNumbers } from '@utils/getUniqueRandomNumbers';
import { SuperheroContext } from './SuperheroContext';

interface SuperheroContextProviderProps {
  children: ReactNode;
}

export const SuperheroContextProvider = ({
  children,
}: SuperheroContextProviderProps) => {
  const refreshRandomHeroesTimer = useRef<ReturnType<typeof setInterval>>();
  const [areHeroesLoading, setHeroesLoading] = useState<boolean>(false);
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [randomHeroIndexes, setRandomHeroIndexes] = useState<number[]>([]);

  const requestRandomHeroes = (length = RANDOM_HERO_DEFAULT_COUNT): void => {
    if (!superheroes.length) {
      return;
    }
    const randomIndexes = getUniqueRandomNumbers(
      length,
      superheroes.length - 1,
      randomHeroIndexes
    );
    setRandomHeroIndexes(randomIndexes);
  };

  useEffect(() => {
    setHeroesLoading(true);
    fetchSuperheroes().then((superheroes) => {
      setSuperheroes(superheroes);
      setHeroesLoading(false);
    });

    refreshRandomHeroesTimer.current = setInterval(
      requestRandomHeroes,
      RANDOM_HEROES_REFRESH_TIME
    );
    requestRandomHeroes();

    return () => {
      if (refreshRandomHeroesTimer.current) {
        clearInterval(refreshRandomHeroesTimer.current);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!superheroes.length) {
      return;
    }

    requestRandomHeroes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superheroes]);

  const randomHeroesSelection =
    randomHeroIndexes.length && superheroes.length
      ? randomHeroIndexes.map((index) => superheroes[index])
      : [];

  return (
    <SuperheroContext.Provider
      value={{
        areHeroesLoading,
        superheroes,
        randomHeroesSelection,
        superheroDetails: undefined,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

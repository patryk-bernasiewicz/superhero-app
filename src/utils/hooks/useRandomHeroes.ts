import { Superhero } from '@interfaces/superhero.interface';
import {
  RANDOM_HEROES_REFRESH_TIME,
  RANDOM_HERO_DEFAULT_COUNT,
} from '@utils/constants';
import { getUniqueRandomNumbers } from '@utils/getUniqueRandomNumbers';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export const useRandomHeroes = (superheroes: Superhero[]) => {
  const refreshTimer = useRef<ReturnType<typeof setInterval>>();
  const [randomIndexes, setRandomIndexes] = useState<number[]>();

  const randomHeroes = useMemo<Superhero[]>(() => {
    return superheroes && randomIndexes
      ? randomIndexes.map((index) => superheroes[index])
      : [];
  }, [superheroes, randomIndexes]);

  const generateRandomIndexes = useCallback((superheroes) => {
    const indexes = getUniqueRandomNumbers(
      RANDOM_HERO_DEFAULT_COUNT,
      superheroes.length,
      randomIndexes
    );

    setRandomIndexes(indexes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!superheroes.length) {
      return;
    }

    refreshTimer.current = setInterval(
      () => generateRandomIndexes(superheroes),
      RANDOM_HEROES_REFRESH_TIME
    );

    return () => {
      if (refreshTimer.current) {
        clearInterval(refreshTimer.current);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superheroes]);

  useEffect(() => {
    if (!superheroes.length) {
      return;
    }

    generateRandomIndexes(superheroes);
  }, [generateRandomIndexes, superheroes]);

  return randomHeroes;
};

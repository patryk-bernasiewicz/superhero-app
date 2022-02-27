import { Superhero } from '@interfaces/superhero.interface';
import { fetchSuperheroes } from '@utils/api';
import { useEffect, useState } from 'react';

export const useSuperheroes = () => {
  const [error, setError] = useState<Error>();
  const [areHeroesLoading, setHeroesLoading] = useState<boolean>(false);
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    setHeroesLoading(true);
    fetchSuperheroes()
      .then((superheroes) => {
        setSuperheroes(superheroes);
        setHeroesLoading(false);
      })
      .catch(() => {
        setError(
          new Error(
            'Could not connect to the database. Please try again later. (did you remember to run `yarn json-server`?)'
          )
        );
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (areHeroesLoading || !superheroes.length) {
      return;
    }
  }, [areHeroesLoading, superheroes.length]);

  return {
    areHeroesLoading,
    error,
    superheroes,
  };
};

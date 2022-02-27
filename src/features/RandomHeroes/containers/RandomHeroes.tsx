import { useContext } from 'react';

import { SuperheroContext } from '@context/SuperheroContext/SuperheroContext';
import { HeroesList } from '../components/HeroesList/HeroesList';

const RandomHeroes = () => {
  const { areHeroesLoading, randomSuperheroes } = useContext(SuperheroContext);

  if (areHeroesLoading) {
    return <div>Loading...</div>;
  }

  return <HeroesList heroes={randomSuperheroes} />;
};

export default RandomHeroes;

import { useContext } from 'react';

import { SuperheroContext } from '@context/SuperheroContext/SuperheroContext';
import { HeroesList } from '../components/HeroesList/HeroesList';

import { ReactComponent as RippleLoader } from '../../../svg/ripple.svg';
import { jestIdsMap } from '@utils/jestHelpers';

const RandomHeroes = () => {
  const { areHeroesLoading, randomSuperheroes } = useContext(SuperheroContext);

  if (areHeroesLoading) {
    return <RippleLoader data-testid={jestIdsMap.loader} />;
  }

  return <HeroesList heroes={randomSuperheroes} />;
};

export default RandomHeroes;

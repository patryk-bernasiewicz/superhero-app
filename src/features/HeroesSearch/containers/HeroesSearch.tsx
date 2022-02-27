import { useContext } from 'react';

import { SuperheroContext } from '@context/SuperheroContext/SuperheroContext';
import { HeroesList } from '@features/HeroesSearch/components/HeroesList/HeroesList';
import { ReactComponent as RippleLoader } from '@svg/ripple.svg';
import { jestIdsMap } from '@utils/jestHelpers';

const HeroesSearch = () => {
  const { areHeroesLoading, randomSuperheroes } = useContext(SuperheroContext);

  if (areHeroesLoading) {
    return <RippleLoader data-testid={jestIdsMap.loader} />;
  }

  return <HeroesList heroes={randomSuperheroes} />;
};

export default HeroesSearch;

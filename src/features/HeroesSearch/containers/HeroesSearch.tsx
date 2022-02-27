import { useContext } from 'react';

import { SuperheroContext } from '@context/SuperheroContext/SuperheroContext';
import { HeroesList } from '@features/HeroesSearch/components/HeroesList/HeroesList';
import { ReactComponent as RippleLoader } from '@svg/ripple.svg';
import { jestIdsMap } from '@utils/jestHelpers';
import { SearchForm } from '../components/SearchForm/SearchForm';

const HeroesSearch = () => {
  const { areHeroesLoading, displayedSuperheroes } =
    useContext(SuperheroContext);

  if (areHeroesLoading) {
    return <RippleLoader data-testid={jestIdsMap.loader} />;
  }

  return (
    <>
      <SearchForm />
      <HeroesList heroes={displayedSuperheroes || []} />
    </>
  );
};

export default HeroesSearch;

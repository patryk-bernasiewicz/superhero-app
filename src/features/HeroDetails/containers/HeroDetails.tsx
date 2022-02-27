import { SuperheroContext } from '@context/SuperheroContext/SuperheroContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as RippleLoader } from '@svg/ripple.svg';
import { jestIdsMap } from '@utils/jestHelpers';
import { NotFound } from '@components/NotFound/NotFound';

const HeroDetails = () => {
  const { slug } = useParams();
  const { areHeroesLoading, heroDetails, findHeroDetails } =
    useContext(SuperheroContext);

  useEffect(() => {
    if (slug && !areHeroesLoading) {
      findHeroDetails(slug);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areHeroesLoading]);

  if (areHeroesLoading) {
    return <RippleLoader data-testid={jestIdsMap.loader} />;
  }

  if (!heroDetails) {
    return <NotFound backHref="/" backText="Back to the Heroes list" />;
  }

  return <div>placeholder</div>;
};

export default HeroDetails;

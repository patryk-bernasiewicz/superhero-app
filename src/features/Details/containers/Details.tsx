import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AppContext } from '@context/AppContext';
import { NotFound } from '@components/NotFound/NotFound';
import { ReactComponent as RippleLoader } from '@svg/ripple.svg';
import { jestIdsMap } from '@utils/jestHelpers';

import { HeroHeadline } from '@features/Details/components/HeroHeadline/HeroHeadline';
import { Powerstats } from '@features/Details/components/Powerstats/Powerstats';
import { Biography } from '@features/Details/components/Biography/Biography';
import { Appearance } from '@features/Details/components/Appearance/Appearance';
import { Work } from '@features/Details/components/Work/Work';
import { Connections } from '@features/Details/components/Connections/Connections';
import { Image } from '@features/Details/components/Image/Image';

import styles from './HeroDetails.module.scss';
import { Button } from '@components/Button/Button';
import { withContext } from '@components/withContext/WithContext';
import { DetailsContext, DetailsProvider } from '../context/DetailsContext';

export const Details = () => {
  const { slug } = useParams();
  const { areHeroesFetching } = useContext(AppContext);
  const { areDetailsLoading, superhero, fetchDetails } =
    useContext(DetailsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (slug && !areHeroesFetching && (!superhero || superhero.slug !== slug)) {
      fetchDetails(slug);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [areHeroesFetching]);

  if (areDetailsLoading || areDetailsLoading) {
    return <RippleLoader data-testid={jestIdsMap.loader} />;
  }

  if (!superhero) {
    return <NotFound backHref="/" backText="Back to the Heroes list" />;
  }

  const {
    name,
    biography,
    biography: { alignment },
    powerstats,
    appearance,
    work,
    connections,
    images,
  } = superhero;

  return (
    <div
      className={styles.wrapper}
      data-testid={jestIdsMap.heroDetails.wrapper}
    >
      <header className={styles.header}>
        <Button type="button" kind="secondary" onClick={() => navigate('/')}>
          Back to search list
        </Button>
        <HeroHeadline name={name} alignment={alignment} />
        <Image name={name} image={images} />
      </header>
      <div className={styles.contents}>
        <Powerstats stats={powerstats} />
        <Biography biography={biography} />
        <Appearance appearance={appearance} />
        <Work work={work} />
        <Connections connections={connections} />
      </div>
    </div>
  );
};

export default withContext(DetailsProvider)(Details);

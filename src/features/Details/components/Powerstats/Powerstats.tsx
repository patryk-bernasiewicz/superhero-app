import { Superhero } from '@interfaces/superhero.interface';
import { mapKeysToNames } from '@utils/mapKeyToNames';

import { DetailsSection } from '@features/Details/components/DetailsSection/DetailsSection';
import { HeroDetailsList } from '@features/Details/components/HeroDetailsList/HeroDetailsList';

interface PowerstatsProps {
  stats: Superhero['powerstats'];
}

export const Powerstats = ({ stats }: PowerstatsProps) => {
  const mappedStatNames = mapKeysToNames(stats);

  return (
    <DetailsSection heading="Powerstats">
      <HeroDetailsList<Superhero['powerstats']>
        details={stats}
        detailNamesMap={mappedStatNames}
      />
    </DetailsSection>
  );
};

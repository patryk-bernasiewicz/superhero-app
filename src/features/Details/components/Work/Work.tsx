import { DetailsSection } from '@features/Details/components/DetailsSection/DetailsSection';
import { HeroDetailsList } from '@features/Details/components/HeroDetailsList/HeroDetailsList';
import { MappedHeroProperty } from '@features/Details/interfaces/MappedHeroProperty';
import { Superhero } from '@interfaces/superhero.interface';

const workMappedProperies: MappedHeroProperty<'work'> = {
  occupation: 'Occupation',
  base: 'Base',
};

interface WorkProps {
  work: Superhero['work'];
}

export const Work = ({ work }: WorkProps) => (
  <DetailsSection heading="Work">
    <HeroDetailsList<Superhero['work']>
      details={work}
      detailNamesMap={workMappedProperies}
    />
  </DetailsSection>
);

import { DetailsSection } from '@features/Details/components/DetailsSection/DetailsSection';
import { HeroDetailsList } from '@features/Details/components/HeroDetailsList/HeroDetailsList';
import { MappedHeroProperty } from '@features/Details/interfaces/MappedHeroProperty';
import { Superhero } from '@interfaces/superhero.interface';

const connectionsMappedProperies: MappedHeroProperty<'connections'> = {
  groupAffiliation: 'Group affiliation',
  relatives: 'Relatives',
};

interface ConnectionsProps {
  connections: Superhero['connections'];
}

export const Connections = ({ connections }: ConnectionsProps) => (
  <DetailsSection heading="Connections">
    <HeroDetailsList<Superhero['connections']>
      details={connections}
      detailNamesMap={connectionsMappedProperies}
    />
  </DetailsSection>
);

import { DetailsSection } from '@features/Details/components/DetailsSection/DetailsSection';
import { HeroDetailsList } from '@features/Details/components/HeroDetailsList/HeroDetailsList';
import { MappedHeroProperty } from '@features/Details/interfaces/MappedHeroProperty';
import { Superhero } from '@interfaces/superhero.interface';

const biographyMappedProperties: MappedHeroProperty<'biography'> = {
  fullName: 'Full name',
  alterEgos: 'Alter egos',
  aliases: 'Aliases',
  placeOfBirth: 'Place of birth',
  firstAppearance: 'First appearance',
  publisher: 'Publisher',
  alignment: 'Alignment',
};

interface BiographyProps {
  biography: Superhero['biography'];
}

export const Biography = ({ biography }: BiographyProps) => (
  <DetailsSection heading="Biography">
    <HeroDetailsList<Superhero['biography']>
      details={biography}
      detailNamesMap={biographyMappedProperties}
    />
  </DetailsSection>
);

import { DetailsSection } from '@features/Details/components/DetailsSection/DetailsSection';
import { HeroDetailsList } from '@features/Details/components/HeroDetailsList/HeroDetailsList';
import { MappedHeroProperty } from '@features/Details/interfaces/MappedHeroProperty';
import { Superhero } from '@interfaces/superhero.interface';

const appearanceMappedProperties: MappedHeroProperty<'appearance'> = {
  gender: 'Gender',
  race: 'Race',
  height: 'Height',
  weight: 'Weight',
  eyeColor: 'Eye color',
  hairColor: 'Hair color',
};

interface AppearanceProps {
  appearance: Superhero['appearance'];
}

export const Appearance = ({ appearance }: AppearanceProps) => (
  <DetailsSection heading="Appearance">
    <HeroDetailsList<Superhero['appearance']>
      detailNamesMap={appearanceMappedProperties}
      details={appearance}
    />
  </DetailsSection>
);

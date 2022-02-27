import React from 'react';
import { screen, within } from '@testing-library/react';

import { jestIdsMap, renderWithContext } from '@utils/jestHelpers';
import { Superhero } from '@interfaces/superhero.interface';

import RandomHeroes from '../containers/HeroesSearch';

test('renders Loader when `areHeroesLoading` is true', () => {
  renderWithContext(<RandomHeroes />);
  screen.getByTestId(jestIdsMap.loader);
});

test('renders HeroesList when `areHeroesLoading` is false and data exists', () => {
  const mockedSupeheroes = [
    {
      id: 1,
      name: 'Lorem ipsum',
      slug: '00-lorem-ipsum',
      biography: {
        fullName: 'Dolor sit',
        alignment: 'good',
        publisher: 'Amet',
      },
    },
  ];

  renderWithContext(
    <RandomHeroes />,
    {},
    {
      areHeroesLoading: false,
      displayedSuperheroes: mockedSupeheroes as Superhero[],
    }
  );

  const heroItems = screen.getByTestId(jestIdsMap.heroesList.item);
  expect(within(heroItems).getByText(mockedSupeheroes[0].name)).toBeVisible();
});

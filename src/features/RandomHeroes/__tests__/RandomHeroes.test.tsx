import React from 'react';
import { screen, within } from '@testing-library/react';

import RandomHeroes from '@features/RandomHeroes/containers/RandomHeroes';
import { jestIdsMap, renderWithContext } from '@utils/jestHelpers';

test('renders "loading..." when `areHeroesLoading` is true', () => {
  renderWithContext(<RandomHeroes />);
  screen.getByText(/Loading.../i);
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
      randomSuperheroes: mockedSupeheroes as any,
    }
  );

  const heroItems = screen.getByTestId(jestIdsMap.randomHeroItem);
  expect(within(heroItems).getByText(mockedSupeheroes[0].name)).toBeVisible();
});

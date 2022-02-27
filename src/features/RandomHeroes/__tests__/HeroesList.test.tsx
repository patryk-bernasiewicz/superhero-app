import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { jestIdsMap } from '@utils/jestHelpers';
import { Superhero } from '@interfaces/superhero.interface';
import { RecursivePartial } from '@interfaces/recursivePartialType';

import { HeroesList } from '../components/HeroesList/HeroesList';

test('Displays empty list when no `heroes` are provided', async () => {
  render(<HeroesList heroes={[]} />);

  screen.getByTestId(jestIdsMap.randomHeroesList);
  expect(
    screen.queryByTestId(jestIdsMap.randomHeroItem)
  ).not.toBeInTheDocument();
});

const mockedHeroes: RecursivePartial<Superhero>[] = [
  {
    id: 1,
    name: 'Lorem',
    slug: '01-lorem',
    biography: {
      fullName: 'Lorem Ipsum',
      alignment: 'good',
      publisher: 'AB',
    },
  },
  {
    id: 2,
    name: 'Ipsum',
    slug: '02-ipsum',
    biography: {
      fullName: 'Ipsum Dolor',
      alignment: 'bad',
      publisher: 'BC',
    },
  },
  {
    id: 3,
    name: 'Sit',
    slug: '02-sit',
    biography: {
      fullName: 'Sit Amet',
      alignment: 'good',
      publisher: 'CD',
    },
  },
];

const detailsViewId = 'details-view';

const renderWithRoute = (heroes: Superhero[]) => {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<HeroesList heroes={heroes} />} />
        <Route path=":slug" element={<div data-testid={detailsViewId} />} />
      </Routes>
    </MemoryRouter>
  );
};

test('Displays valid data', () => {
  renderWithRoute(mockedHeroes as Superhero[]);

  const items = screen.getAllByTestId(jestIdsMap.randomHeroItem);
  expect(items.length).toBe(mockedHeroes.length);

  items.forEach((item, index) => {
    const hero = mockedHeroes[index] as Superhero;

    within(item).getByText(hero.name);
    within(item).getByText(hero.biography.fullName);
    within(item).getByText(hero.biography.alignment);
    within(item).getByText(hero.biography.publisher);
  });
});

test('navigates to details page on Link click', async () => {
  renderWithRoute(mockedHeroes as Superhero[]);

  const link = screen.getAllByTestId(jestIdsMap.randomHeroLink);
  fireEvent.click(link[0]);
  screen.getByTestId(detailsViewId);
});

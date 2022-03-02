import { fireEvent, render, screen, within } from '@testing-library/react';
import { Route } from 'react-router-dom';

import {
  createMemoryRouter,
  jestIdsMap,
  mockedSuperheroes,
} from '@utils/jestHelpers';
import { Superhero } from '@interfaces/superhero.interface';

import { HeroesList } from './HeroesList';

const detailsViewId = 'details-view';
const renderWithRouter = () => {
  return render(
    createMemoryRouter(
      <>
        <Route path="/" element={<HeroesList heroes={mockedSuperheroes} />} />
        <Route path=":slug" element={<div data-testid={detailsViewId} />} />
      </>
    )
  );
};

test('Displays "No heroes to display" message when superheroes array is empty', async () => {
  render(<HeroesList heroes={[]} />);

  screen.getByText(/No heroes to display/i);
  expect(
    screen.queryByTestId(jestIdsMap.heroesList.list)
  ).not.toBeInTheDocument();
});

test('Displays all Superheroes as a list', () => {
  renderWithRouter();

  const items = screen.getAllByTestId(jestIdsMap.heroesList.item);
  expect(items.length).toBe(mockedSuperheroes.length);

  items.forEach((item, index) => {
    const hero = mockedSuperheroes[index] as Superhero;

    within(item).getByText(hero.name);
    within(item).getByText(hero.biography.fullName);
    within(item).getByText(hero.biography.alignment);
    within(item).getByText(hero.biography.publisher);
  });
});

test('navigates to details page on Link click', async () => {
  renderWithRouter();

  const link = screen.getAllByTestId(jestIdsMap.heroesList.link);
  fireEvent.click(link[0]);
  screen.getByTestId(detailsViewId);
});

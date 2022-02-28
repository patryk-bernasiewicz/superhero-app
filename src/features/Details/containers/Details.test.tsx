import { AppContext, initialState } from '@context/AppContext';
import { render, screen } from '@testing-library/react';
import {
  createMemoryRouter,
  jestIdsMap,
  mockedSuperheroes,
} from '@utils/jestHelpers';
import { Route } from 'react-router-dom';
import { DetailsContext, detailsInitialState } from '../context/DetailsContext';
import { useParams } from 'react-router-dom';

import { Details } from './Details';
import { Superhero } from '@interfaces/superhero.interface';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

const fetchDetailsMock = jest.fn();

const renderWithRouter = () =>
  createMemoryRouter(<Route path="/" element={<Details />} />);

const expectedSlug = 'slug';
(useParams as jest.Mock).mockReturnValue({
  slug: expectedSlug,
});

test('renders loader when hero is loading', () => {
  render(
    <AppContext.Provider value={initialState}>
      <DetailsContext.Provider value={detailsInitialState}>
        {renderWithRouter()}
      </DetailsContext.Provider>
    </AppContext.Provider>
  );
  screen.getByTestId(jestIdsMap.loader);
});

test('invokes `fetchDetails` on load', () => {
  render(
    <AppContext.Provider
      value={{
        ...initialState,
        areHeroesFetched: true,
        areHeroesFetching: false,
      }}
    >
      <DetailsContext.Provider
        value={{
          ...detailsInitialState,
          fetchDetails: fetchDetailsMock,
        }}
      >
        {renderWithRouter()}
      </DetailsContext.Provider>
    </AppContext.Provider>
  );
  expect(fetchDetailsMock).toHaveBeenCalledWith(expectedSlug);
});

test('renders 404 when hero not found', () => {
  render(
    <AppContext.Provider value={initialState}>
      <DetailsContext.Provider
        value={{
          ...detailsInitialState,
          areDetailsLoading: false,
          superhero: undefined,
        }}
      >
        {renderWithRouter()}
      </DetailsContext.Provider>
    </AppContext.Provider>
  );
  screen.getByTestId(jestIdsMap.notFound);
});

test('renders all hero details when loaded', () => {
  const [expectedHero] = mockedSuperheroes;
  render(
    <AppContext.Provider value={initialState}>
      <DetailsContext.Provider
        value={{
          ...detailsInitialState,
          areDetailsLoading: false,
          superhero: expectedHero,
        }}
      >
        {renderWithRouter()}
      </DetailsContext.Provider>
    </AppContext.Provider>
  );
  screen.getByTestId(jestIdsMap.heroDetails.wrapper);

  const heading = screen.getByTestId(jestIdsMap.heroDetails.heading);
  expect(heading).toHaveTextContent(expectedHero.name);

  const alignment = screen.getByTestId(jestIdsMap.heroDetails.alignment);
  expect(alignment).toHaveTextContent(expectedHero.biography.alignment);
  expect(alignment).toHaveClass(expectedHero.biography.alignment);

  const detailsSections: Array<keyof Superhero> = [
    'biography',
    'appearance',
    'powerstats',
    'work',
    'connections',
  ];
  const detailsLength = detailsSections.reduce((accumulator, section) => {
    return accumulator + Object.keys(expectedHero[section]).length;
  }, 0);

  const details = screen.getAllByTestId(jestIdsMap.heroDetails.detailLabel);
  expect(details.length).toBe(detailsLength);
});

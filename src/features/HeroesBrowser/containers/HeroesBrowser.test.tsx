import { Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { AppContext, AppState, initialState } from '@context/AppContext';
import {
  createMemoryRouter,
  jestIdsMap,
  mockedSuperheroes,
} from '@utils/jestHelpers';

import { HeroesBrowser } from './HeroesBrowser';
import messages from '@utils/messages';

test('always renders search form', () => {
  render(
    <AppContext.Provider value={initialState}>
      <HeroesBrowser />
    </AppContext.Provider>
  );

  screen.getByTestId(jestIdsMap.heroesSearch.form.formElement);
});

test('renders a loader when heroes are fetching', () => {
  render(
    <AppContext.Provider
      value={{
        ...initialState,
        areHeroesFetched: false,
        areHeroesFetching: true,
      }}
    >
      <HeroesBrowser />
    </AppContext.Provider>
  );

  screen.getByTestId(jestIdsMap.loader);
});

describe('when heroes are fetched', () => {
  const commonState: AppState = {
    ...initialState,
    areHeroesFetched: true,
    areHeroesFetching: false,
    superheroes: mockedSuperheroes,
    displayedHeroes: mockedSuperheroes,
  };

  const renderWithRouter = () =>
    createMemoryRouter(
      <>
        <Route path="/" element={<HeroesBrowser />} />
        <Route path=":slug" element={<div />} />
      </>
    );

  test('renders heroes in a list when loaded', () => {
    render(
      <AppContext.Provider value={commonState}>
        {renderWithRouter()}
      </AppContext.Provider>
    );

    screen.getByTestId(jestIdsMap.heroesList.list);
  });

  test('renders message about randomly selected heroes when not searched', () => {
    render(
      <AppContext.Provider value={commonState}>
        {renderWithRouter()}
      </AppContext.Provider>
    );

    screen.getByText(messages.checkOutRandomHeroes);
  });

  test('does not render message when search was done', () => {
    render(
      <AppContext.Provider
        value={{
          ...commonState,
          hasSearchResults: true,
        }}
      >
        {renderWithRouter()}
      </AppContext.Provider>
    );

    expect(
      screen.queryByText(messages.checkOutRandomHeroes)
    ).not.toBeInTheDocument();
  });
});

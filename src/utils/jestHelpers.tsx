import { render, RenderOptions } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import {
  SuperheroContext,
  SuperheroState,
} from '@context/SuperheroContext/SuperheroContext';

export const jestIdsMap = {
  errorBoundary: 'error-boundary',
  loader: 'loader',
  heroesList: {
    list: 'heroes-list',
    item: 'hero-item',
    link: 'hero-link',
  },
};

export const renderWithContext = (
  ui: ReactNode,
  options?: RenderOptions,
  modifiedContextValue?: Partial<SuperheroState>
) => {
  render(
    <SuperheroContext.Provider
      value={{
        areHeroesLoading: true,
        displayedSuperheroes: [],
        handleHeroSearch: () => null,
        ...(modifiedContextValue || {}),
      }}
    >
      <MemoryRouter>{ui}</MemoryRouter>
    </SuperheroContext.Provider>
  );
};

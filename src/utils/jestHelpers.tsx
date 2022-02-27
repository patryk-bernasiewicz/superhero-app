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
  randomHeroesList: 'random-heroes-list',
  randomHeroItem: 'random-hero-item',
  randomHeroLink: 'random-hero-link',
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
        superheroes: [],
        randomSuperheroes: [],
        superheroDetails: undefined,
        ...(modifiedContextValue || {}),
      }}
    >
      <MemoryRouter>{ui}</MemoryRouter>
    </SuperheroContext.Provider>
  );
};
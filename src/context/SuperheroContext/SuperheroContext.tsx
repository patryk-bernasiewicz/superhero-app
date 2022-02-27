import { createContext } from 'react';

import { Superhero } from '@interfaces/superhero.interface';

export interface SuperheroState {
  areHeroesLoading: boolean;
  handleHeroSearch: (text: string) => void;
  displayedSuperheroes?: Superhero[];
  heroDetails?: Superhero;
  findHeroDetails: (slug: string) => void;
}

export const initialState: SuperheroState = {
  areHeroesLoading: true,
  handleHeroSearch: () => {},
  displayedSuperheroes: undefined,
  heroDetails: undefined,
  findHeroDetails: () => {},
};

export const SuperheroContext = createContext<SuperheroState>(initialState);

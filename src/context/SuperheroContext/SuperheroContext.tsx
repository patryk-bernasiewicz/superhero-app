import { createContext } from 'react';

import { Superhero } from '@interfaces/superhero.interface';

export interface SuperheroState {
  areHeroesLoading: boolean;
  superheroDetails?: Superhero;
  handleHeroSearch: (text: string) => void;
  displayedSuperheroes?: Superhero[];
}

export const SuperheroContext = createContext<SuperheroState>(
  {} as SuperheroState
);

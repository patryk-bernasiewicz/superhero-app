import { createContext } from 'react';

import { Superhero } from '@interfaces/superhero.interface';

interface SuperheroState {
  areHeroesLoading: boolean;
  superheroes: Superhero[];
  randomSuperheroes: Superhero[];
  superheroDetails?: Superhero;
}

export const SuperheroContext = createContext<SuperheroState>({
  areHeroesLoading: false,
  superheroes: [],
  randomSuperheroes: [],
  superheroDetails: undefined,
});

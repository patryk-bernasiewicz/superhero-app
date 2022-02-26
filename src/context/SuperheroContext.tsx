import { createContext } from 'react';

import { Superhero } from '@interfaces/superhero.interface';

interface SuperheroState {
  areHeroesLoading: boolean;
  superheroes: Superhero[];
  randomHeroesSelection?: Superhero[];
  superheroDetails?: Superhero;
}

export const SuperheroContext = createContext<SuperheroState>({
  areHeroesLoading: false,
  superheroes: [],
  randomHeroesSelection: undefined,
  superheroDetails: undefined,
});

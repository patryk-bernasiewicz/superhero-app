import { Superhero } from '@interfaces/superhero.interface';

export type MappedHeroProperty<K extends keyof Superhero> = Record<
  keyof Superhero[K],
  string
>;

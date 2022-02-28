import { Superhero } from '@interfaces/superhero.interface';
import { ReactNode } from 'react';
import { MemoryRouter, Routes } from 'react-router-dom';

export const jestIdsMap = {
  errorBoundary: 'error-boundary',
  loader: 'loader',
  notFound: 'not-found',
  heroesList: {
    list: 'heroes-list',
    item: 'hero-item',
    link: 'hero-link',
  },
  heroesSearch: {
    form: {
      formElement: 'heroes-search-form',
      input: 'heroes-search-input',
    },
  },
  heroDetails: {
    wrapper: 'hero-details-wrapper',
    heading: 'hero-details-heading',
    alignment: 'hero-details-alignment',
    detailLabel: 'hero-details-label',
    detailValue: 'hero-details-value',
  },
};

const baseHeroMock: Omit<Superhero, 'name' | 'id' | 'slug'> = {
  powerstats: {
    intelligence: 1,
    strength: 1,
    speed: 1,
    durability: 1,
    power: 1,
    combat: 1,
  },
  appearance: {
    gender: 'Male',
    race: 'Human',
    height: ['5\'8"', '176 cm'],
    weight: ['198 lbs', '90 kg'],
    eyeColor: 'Blue',
    hairColor: 'Black',
  },
  biography: {
    fullName: 'Lorem Ipsum',
    alterEgos: 'Loripsum',
    aliases: ['Lorem', 'Ipsum'],
    placeOfBirth: 'Lorem City',
    firstAppearance: 'Lorem Comic',
    publisher: 'AB',
    alignment: 'good',
  },
  work: {
    occupation: 'None',
    base: 'Earth',
  },
  connections: {
    groupAffiliation: 'Dunder Mifflin',
    relatives: 'Michael Scott',
  },
  images: {
    xs: 'http://image.test/xs.jpg',
    sx: 'http://image.test/sx.jpg',
    md: 'http://image.test/md.jpg',
    lg: 'http://image.test/lg.jpg',
  },
};

export const mockedSuperheroes: Superhero[] = [
  {
    ...baseHeroMock,
    id: 1,
    name: 'Lorem',
    slug: '01-lorem',
  },
  {
    ...baseHeroMock,
    id: 2,
    name: 'Ipsum',
    slug: '02-ipsum',
  },
  {
    ...baseHeroMock,
    id: 3,
    name: 'Sit',
    slug: '02-sit',
  },
];

export const createMemoryRouter = (routes: ReactNode) => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>{routes}</Routes>
  </MemoryRouter>
);

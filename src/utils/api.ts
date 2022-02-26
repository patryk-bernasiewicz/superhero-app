import { request } from '@utils/request';

import { Superhero } from '@interfaces/superhero.interface';

export const fetchSuperheroes = request<Superhero[]>('heroes');

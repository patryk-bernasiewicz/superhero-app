import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { SuperheroContextProvider } from '@context/SuperheroContext/SuperheroContextProvider';
import { useRandomHeroes } from '@utils/hooks/useRandomHeroes';
import { fetchSuperheroes } from '@utils/api';

jest.mock('@utils/api', () => ({
  fetchSuperheroes: jest.fn().mockReturnValue(Promise.resolve([])),
}));

jest.mock('@utils/hooks/useRandomHeroes', () => ({
  useRandomHeroes: jest.fn(),
}));

afterEach(() => jest.clearAllMocks());

test('fetches superheroes when page is initialized', async () => {
  render(<div />, { wrapper: SuperheroContextProvider });

  await waitFor(() => {
    expect(fetchSuperheroes).toHaveBeenCalled();
  });
});

test('renders given children', async () => {
  render(<div>Lorem ipsum</div>, { wrapper: SuperheroContextProvider });

  await waitFor(() => {
    screen.getByText(/Lorem ipsum/);
  });
});

test('calls useRandomHeroes hook with data', async () => {
  const mockedSuperhero = { id: 1 };
  (fetchSuperheroes as jest.Mock).mockResolvedValue(
    Promise.resolve([mockedSuperhero])
  );

  render(<div />, { wrapper: SuperheroContextProvider });

  await waitFor(() => {
    expect(useRandomHeroes).toHaveBeenLastCalledWith([mockedSuperhero]);
  });
});

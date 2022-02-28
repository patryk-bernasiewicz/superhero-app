import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { AppContextProvider } from '@context/AppContext';
import { fetchSuperheroes } from '@utils/api';

jest.mock('@utils/api', () => ({
  fetchSuperheroes: jest.fn().mockReturnValue(Promise.resolve([])),
}));

afterEach(() => jest.clearAllMocks());

test('fetches superheroes when page is initialized', async () => {
  render(<div />, { wrapper: AppContextProvider });

  await waitFor(() => {
    expect(fetchSuperheroes).toHaveBeenCalled();
  });
});

test('renders given children', async () => {
  render(<div>Lorem ipsum</div>, { wrapper: AppContextProvider });

  await waitFor(() => {
    screen.getByText(/Lorem ipsum/);
  });
});

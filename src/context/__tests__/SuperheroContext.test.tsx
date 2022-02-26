import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import { SuperheroContextProvider } from '@context/SuperheroContext';

import { request } from '@utils/request';

jest.mock('@utils/request', () => ({
  request: jest.fn().mockReturnValue(jest.fn().mockResolvedValue([])),
}));

test('fetches superheroes when page is initialized', async () => {
  render(<div />, { wrapper: SuperheroContextProvider });

  await waitFor(() => {
    expect(request).toHaveBeenCalledWith('heroes');
  });
});

test('renders given children', async () => {
  render(<div>Lorem ipsum</div>, { wrapper: SuperheroContextProvider });

  await waitFor(() => {
    screen.getByText(/Lorem ipsum/);
  });
});

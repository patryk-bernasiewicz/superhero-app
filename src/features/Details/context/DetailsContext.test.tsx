import { render, screen, waitFor } from '@testing-library/react';

import { DetailsProvider } from './DetailsContext';

test('renders given children', async () => {
  render(<div>Lorem ipsum</div>, { wrapper: DetailsProvider });

  await waitFor(() => {
    screen.getByText(/Lorem ipsum/);
  });
});

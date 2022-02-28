import { render, screen } from '@testing-library/react';

import { Layout } from '@components/Layout/Layout';

test('renders children without crashing', () => {
  render(<div>Lorem ipsum</div>, { wrapper: Layout });
  screen.getByText(/Lorem ipsum/);
});

import { render, screen } from '@testing-library/react';

import { Button, ButtonProps } from './Button';

const buttonText = 'Lorem ipsum';

test('renders default button', () => {
  render(<Button type="button">{buttonText}</Button>);
  expect(screen.getByText(buttonText)).toHaveClass('button');
});

test('renders valid kind', () => {
  const expectedKind: ButtonProps['kind'] = 'primary';
  render(
    <Button kind={expectedKind} type="button">
      {buttonText}
    </Button>
  );
  expect(screen.getByText(buttonText)).toHaveClass(expectedKind);
});

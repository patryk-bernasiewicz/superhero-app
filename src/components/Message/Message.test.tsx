import { screen, render } from '@testing-library/react';

import { Message } from './Message';

const expectedHeading = 'Heading';
const expectedText = 'Lorem ipsum';

test('renders valid info', () => {
  render(<Message heading={expectedHeading} text={expectedText} />);

  screen.getByText(expectedText, { selector: 'p' });
  expect(screen.getByText(expectedHeading)).toHaveClass('heading');
});

test('renders children', () => {
  const expectedContent = 'Dolor sit amet';
  render(
    <Message heading={expectedHeading} text={expectedText}>
      {expectedContent}
    </Message>
  );

  screen.getByText(expectedContent);
});

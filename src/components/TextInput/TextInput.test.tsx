import { fireEvent, render, screen } from '@testing-library/react';

import { TextInput } from './TextInput';

const expectedLabel = 'Test label';
const expectedValue = 'lorem';

test('renders valid input', () => {
  render(
    <TextInput
      label={expectedLabel}
      type="text"
      value={expectedValue}
      onChange={jest.fn()}
    />
  );

  const input = screen.getByLabelText(expectedLabel);
  expect(input).toHaveValue(expectedValue);
});

test('it invokes onChange when input value changes', () => {
  const onChange = jest.fn();
  render(
    <TextInput label={expectedLabel} type="text" value="" onChange={onChange} />
  );

  fireEvent.change(screen.getByLabelText(expectedLabel), {
    target: {
      value: expectedValue,
    },
  });
  expect(onChange).toHaveBeenCalled();
});

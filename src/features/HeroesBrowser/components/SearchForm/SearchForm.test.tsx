import { fireEvent, render, screen } from '@testing-library/react';
import { jestIdsMap } from '@utils/jestHelpers';
import messages from '@utils/messages';

import { SearchForm } from './SearchForm';

const onChangeMock = jest.fn();

test('always renders form and a tip', () => {
  render(<SearchForm value="" onChange={onChangeMock} />);
  screen.getByTestId(jestIdsMap.heroesSearch.form.formElement);
  screen.getByText(messages.minCharactersToSearch);
});

test('can be disabled with prop', () => {
  render(<SearchForm isDisabled value="" onChange={onChangeMock} />);

  const input = screen.getByTestId(jestIdsMap.heroesSearch.form.input);

  expect(input).toBeDisabled();
  fireEvent.change(input, {
    target: { value: 'test' },
  });
  expect(onChangeMock).not.toHaveBeenCalled();
});

test('invokes onChange automatically when typed', () => {
  const expectedValue = 'test';
  render(<SearchForm value="" onChange={onChangeMock} />);

  const input = screen.getByTestId(jestIdsMap.heroesSearch.form.input);

  fireEvent.change(input, {
    target: { value: expectedValue },
  });

  expect(onChangeMock).toHaveBeenCalledWith(expectedValue);
});

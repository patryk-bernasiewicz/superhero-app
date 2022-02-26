import React from 'react';
import { render, screen } from '@testing-library/react';

import { GlobalErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { jestIdsMap } from '../../constants/jestHelpers';

test('it renders children when nothing throws', () => {
  const expectedText = 'Lorem ipsum dolor sit.';
  const RegularComponent = () => (
    <div>{expectedText}</div>
  );

  render(<RegularComponent />, { wrapper: GlobalErrorBoundary });
  screen.getByText(expectedText);
});

test('it shows error when component throws', () => {
  // Mock console.error so that thrown error doesn't output to console
  const consoleSpy = jest.spyOn(console, 'error');
  consoleSpy.mockImplementation(() => {});

  const expectedError = new Error('Lorem ipsum dolor sit.');
  const ThrowingComponent = () => {
    throw expectedError;
  };

  render(<ThrowingComponent />, { wrapper: GlobalErrorBoundary });
  expect(screen.getByTestId(jestIdsMap.errorBoundary)).toBeVisible();

  consoleSpy.mockRestore();
});
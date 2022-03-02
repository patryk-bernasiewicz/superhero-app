import { Component, ReactNode } from 'react';
import { jestIdsMap } from '@utils/jestHelpers';

import styles from './ErrorBoundary.module.scss';
import { Message } from '@components/Message/Message';

interface GlobalErrorBoundaryState {
  hasError: boolean;
  errorMessage?: string;
}

export class GlobalErrorBoundary extends Component<
  any,
  GlobalErrorBoundaryState
> {
  state = {
    hasError: false,
    errorMessage: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    const { message } = error;

    return {
      hasError: true,
      errorMessage: message,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      errorMessage: error.message,
    });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError, errorMessage } = this.state;

    if (hasError) {
      return (
        <Message
          heading="Oh no!"
          text="An error happened somewhere in the app... Please let us know by email!"
          data-testid={jestIdsMap.errorBoundary}
        >
          <div className={styles.details}>
            Error Details:
            <p className={styles.errorMessage}>{errorMessage}</p>
          </div>
        </Message>
      );
    }

    return children;
  }
}

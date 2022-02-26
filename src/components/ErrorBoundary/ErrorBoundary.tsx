import { Component, ReactNode } from 'react';
import { jestIdsMap } from '@utils/jestHelpers';

import styles from './ErrorBoundary.module.scss';

interface GlobalErrorBoundaryState {
  hasError: boolean;
  errorMessage?: string;
}

export class GlobalErrorBoundary extends Component<any, GlobalErrorBoundaryState> {
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
    const {
      hasError,
      errorMessage,
    } = this.state;

    if (hasError) {
      return (
        <div
          className={styles.wrapper}
          data-testid={jestIdsMap.errorBoundary}
        >
          <div className={styles.boundary}>
            <div className={styles.heading}>Oh no!</div>
            <p>An error happened somewhere in the app... Please let us know by email!</p>
            {errorMessage && (
              <div className={styles.details}>
                Error Details:
                <p className={styles.errorMessage}>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      );
    }


    return children;
  }
}
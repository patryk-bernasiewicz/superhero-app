import { ComponentType, FC } from 'react';

export const withContext =
  <P extends object>(ContextProvider: ComponentType) =>
  (Component: ComponentType<P>): FC<P> =>
  (props) =>
    (
      <ContextProvider>
        <Component {...props} />
      </ContextProvider>
    );

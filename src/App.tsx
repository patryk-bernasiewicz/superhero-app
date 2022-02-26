import React from 'react';

import { SuperheroContextProvider } from '@context/SuperheroContext';
import { Layout } from '@components/Layout/Layout';

const App = () => {
  return (
    <SuperheroContextProvider>
      <Layout>Hello World!</Layout>
    </SuperheroContextProvider>
  );
};

export default App;

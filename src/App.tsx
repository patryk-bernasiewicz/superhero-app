import React from 'react';

import { SuperheroContextProvider } from '@context/SuperheroContext';

const App = () => {
  return <SuperheroContextProvider>Hello World!</SuperheroContextProvider>;
};

export default App;

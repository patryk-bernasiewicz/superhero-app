import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SuperheroContextProvider } from '@context/SuperherContextProvider';
import { Layout } from '@components/Layout/Layout';
import { GlobalErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';

import RandomHeroes from '@features/RandomHeroes/containers/RandomHeroes';
import HeroDetails from '@features/HeroDetails/containers/HeroDetails';

import 'reseter.css';
import './index.scss';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <SuperheroContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<RandomHeroes />} />
              <Route path=":slug" element={<HeroDetails />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </SuperheroContextProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

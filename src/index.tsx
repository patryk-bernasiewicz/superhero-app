import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppContextProvider } from '@context/AppContext';
import { Layout } from '@components/Layout/Layout';
import { GlobalErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';

import HeroesBrowser from '@features/HeroesBrowser/containers/HeroesBrowser';
import HeroDetails from '@features/Details/containers/HeroDetails';

import 'reseter.css';
import './index.scss';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalErrorBoundary>
      <AppContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/">
                <Route index element={<HeroesBrowser />} />
                <Route path=":slug" element={<HeroDetails />} />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContextProvider>
    </GlobalErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

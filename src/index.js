import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './styles/global-styles.css';
import { Home } from './templates/Home';
import { CounterContextProvider } from './contexts/CounterContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <CounterContextProvider>
    <Home tab="home" />
  </CounterContextProvider>,
);

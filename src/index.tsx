import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);

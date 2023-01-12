import React from 'react';

import Routes from './routes';

import { Normalize } from 'styled-normalize';

import { theme } from './styles/theme';
import { ThemeProvider } from './styles/styled-components';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
      <Normalize />
    </ThemeProvider>
  );
}

export default App;

import React, { useEffect } from 'react';
import GlobalStyle from './Theme/globalStyle';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { BRouter } from './Routes';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#fafafb', // Main primary color
    secondary: '#010001', // Main secondary color
    background: '#010001', // Default background color
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Default font family
  },
};

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Pavan Anime Quiz';
  }, []); 
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <GlobalStyle />
        <BRouter />
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
};

export default App;

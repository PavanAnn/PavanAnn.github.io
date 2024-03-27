import React from 'react';
import { CssBaseline } from '@mui/material';
import GlobalStyle from './Theme/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import { BRouter } from './Routes';

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <CssBaseline />
      <GlobalStyle />
      <BRouter />
    </BrowserRouter>
    </>
  );
};

export default App;

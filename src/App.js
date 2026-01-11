import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';

export default function App() {
  const [mode, setMode] = useState('dark');

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#e65100', 
      },
      background: {
        default: mode === 'light' ? '#fafafa' : '#121212',
      },
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} toggleTheme={toggleTheme} />
      <Hero mode={mode} />
      <Cards mode={mode} />
      <Footer mode={mode} />
    </ThemeProvider>
  );
}
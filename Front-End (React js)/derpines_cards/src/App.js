import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import customTheme from './Themes/CustomTheme';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={customTheme}>
        <MainPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;

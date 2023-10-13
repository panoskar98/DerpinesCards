import React from 'react';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#F0ECE2', // primary color
      },
      secondary: {
        main: '#DFD3C3', // secondary color
      },
      customColor1: {
        main: '#C7B198', // custom button color 1
      },
      iconColor: {
        main: '#596E79', // custom button color 2
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif',
    },
  });


  return (
    <ThemeProvider theme={customTheme}>
      <div className="App" style={{ backgroundColor: customTheme.palette.primary.main, minHeight: '100vh' }}>
        <MainPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;

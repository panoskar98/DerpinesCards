import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#F0ECE2', // primary color
    },
    secondary: {
      main: '#DFD3C3', // secondary color
    },
    dark1: {
      main: '#C7B198', // custom button color 1
    },
    dark2: {
      main: '#596E79', // custom button color 2
    },
  },
  typography: {
    fontFamily: ["Montserrat", "cursive"].join(','),
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});

export default customTheme;
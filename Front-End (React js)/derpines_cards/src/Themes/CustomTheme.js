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
    MuiTypography: {
      variants: [
          {
              props: {
                  variant: "body2"
              },
              style: {
                  fontSize: 11,
              }
          },
          {
              props: {
                  variant: "body3"
              },
              style: {
                  fontSize: 9,
              }
          }
      ]
  }
  });

  export default customTheme;
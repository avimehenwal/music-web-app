import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#344955",
      light: "#4A6572",
      dark: "#232F34",
      contrastText: "#000000",
    },
    secondary: {
      main: "#F9AA33",
      light: "#8ee1ff",
      dark: "#1280a8",
      contrastText: "#000000",
    },
    // primary: {
    //   light: '#757ce8',
    //   main: '#3f50b5',
    //   dark: '#002884',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
    error: {
      main: '#ee4e65e6'
    },
    warning: {
      main: '#fd852e'
    }
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 15,
    h2: {
      fontSize: 30,
    },
  },
  components: {
    MuiCssBaseline: {},
  },
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3594ed',
    },
    secondary: {
      main: '#fdbf2e',
    },
    error: {
      main: '#ee4e65e6'
    },
    warning: {
      main: '#fd852e'
    }
  },
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    MuiCssBaseline: {},
  },
});
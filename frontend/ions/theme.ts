import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3700B3',
    },
    secondary: {
      main: '#03DAC6',
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
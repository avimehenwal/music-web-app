import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
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
    fontSize: 15,
    h2: {
      fontSize: 30,
    },
  },
  components: {
    MuiCssBaseline: {},
  },
});
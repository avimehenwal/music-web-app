import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { config, drawerWidth } from '../ions/appData';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledApp = styled(Box)(({ theme }) => ({
  display: 'flex',
  '& .pad-left': {
    marginLeft: '1rem'
  },
  '& .main-grid': {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: "4em",
    backgroundColor: 'darkgray'
  }
}));

export const PageLayout1: React.FC = (props) => {
  const theme = useTheme();

  return (
    <StyledApp>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton>
            <LibraryMusicOutlinedIcon color="secondary" fontSize="large" />
          </IconButton>
          <Typography variant="h4" noWrap color="white" className="pad-left">
            {config.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="main" className='main-grid'>
        {props.children}
      </Box>
    </StyledApp>
  );
}

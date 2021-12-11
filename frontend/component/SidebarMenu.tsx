import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from "react";


export const SidebarMenu: React.FC = () => {

  const menuItems = [
    {
      label: 'Analyze',
      icon: <VisibilityOutlinedIcon sx={{ color: 'secondary.main' }} />,
      color: 'secondary.main'
    },
    {
      label: 'Verify',
      icon: <TaskAltOutlinedIcon sx={{ color: 'white' }} />,
      color: 'white'
    },
    {
      label: 'Explore',
      icon: <MapOutlinedIcon sx={{ color: 'white' }} />,
      color: 'white'
    },
    {
      label: 'Report',
      icon: <MovingOutlinedIcon sx={{ color: 'white' }} />,
      color: 'white'
    },
    {
      label: 'Setting',
      icon: <SettingsOutlinedIcon sx={{ color: 'white' }} />,
      color: 'white'
    },
  ]

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item.label} sx={{ margin: '10px', marginTop: '25px' }}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.label} sx={{ color: item.color }} />
        </ListItem>
      ))}
    </List>
  )
}

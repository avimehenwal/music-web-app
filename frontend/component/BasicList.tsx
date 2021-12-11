import InboxIcon from '@mui/icons-material/Inbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { SongDetail } from './SongDetail'
import Image from 'next/image'

interface BasicListProps {
  items: any[]
}

export const BasicList: React.FC<BasicListProps> = ({ items }) => {
  return (
    <Box>
      <List sx={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
        {items?.map(item => (
          <ListItem key={item.id}>
            {/* <ListItemButton> */}
            {/* <ListItemText primary={item.name} /> */}
            <Image
              src={item.cover_image_path}
              alt={item.name}
              width={200}
              height={200}
            />
            <SongDetail data={item} />
            {/* </ListItemButton> */}
          </ListItem>
        ))}

      </List>
      <Divider />
    </Box>
  )
}

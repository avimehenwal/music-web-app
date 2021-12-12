import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { MusicCard } from './MusicCard';

interface BasicListProps {
  items: any[]
}

export const BasicList: React.FC<BasicListProps> = ({ items }) => {
  const theme = useTheme();

  return (
    <Box>
      <List sx={{
        display: 'grid',
        gridTemplateColumns: {
          sm: "1fr",
          md: "1fr 1fr",
        },
        gridGap: '1em'
      }}>
        {items?.map(item => (
          <MusicCard item={item} key={item.id} />
        ))}
      </List>
    </Box >
  )
}

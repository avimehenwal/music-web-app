import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

interface BasicListProps {
  items: any[]
}

const DataStyle = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  padding: '0.1rem',
  marginLeft: '1rem',
  // fontSize: '6'
}));


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
          <>
            <Card sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', margin: '2rem' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h5">
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.artist_name}
                  </Typography>
                </CardContent>

                <Box sx={{ marginBottom: '1em' }}>
                  <audio controls>
                    <source src={item.music_file_path} type={item.music_file_mimetype} />
                    Your browser does not support the audio element.
                  </audio>
                </Box>

                <DataStyle>
                  <FavoriteBorderOutlinedIcon color="info" fontSize="small" />
                  <Typography variant="body2" sx={{ marginLeft: "1em" }}><strong>{item.faves}</strong> Favourites</Typography>
                </DataStyle>

                <DataStyle>
                  <ThumbUpOutlinedIcon color="warning" fontSize="small" />
                  <Typography variant="body2" sx={{ marginLeft: "1em" }}><strong>{item.likes}</strong> Likes</Typography>
                </DataStyle>

              </Box>

              <CardMedia
                component="img"
                sx={{ height: 300, width: 300 }}
                image={item.cover_image_path}
                alt={item.name}
              />
            </Card>
          </>
        ))}
      </List>
    </Box >
  )
}

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import * as React from 'react';
import { SongDetail } from './SongDetail';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import { isBoxedPrimitive } from 'util/types';


interface BasicListProps {
  items: any[]
}

const DataStyle = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  padding: '0.1rem',
  marginLeft: '1rem'
}));



export const BasicList: React.FC<BasicListProps> = ({ items }) => {
  const theme = useTheme();

  return (
    <Box>
      <List sx={{ display: 'grid', gridTemplateColumns: "1fr 1fr", gridGap: '1em' }}>
        {items?.map(item => (
          <>
            {/* <ListItem key={item.id}>
              <Image
                className='on-hover-playback-image'
                src={item.cover_image_path}
                alt={item.name}
                width={200}
                height={200}
              />
              <SongDetail data={item} />
            </ListItem> */}

            {/* <Divider /> */}
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

                {/* <IconButton aria-label="play/pause" color='secondary' sx={{ borderRadius: '0', marginBottom: '0.6em' }}>
                  <PlayArrowIcon sx={{ height: 50, width: 50 }} />
                </IconButton> */}

                <Box sx={{ marginBottom: '0.5em' }}>
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
                sx={{ width: 200 }}
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

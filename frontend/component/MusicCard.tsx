import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from "react";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const DataStyle = styled('div')(() => ({
  display: 'inline-flex',
  padding: '0.1rem',
  marginRight: '1em'
}));


const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.15s ease-in-out",

  "&:hover": {
    transform: "scale3d(1.05, 1.10, 1)",
  },
  '& .margin-bottom': {
    marginBottom: '1em',
  },
  "& .on-hover:hover": {
    color: theme.palette.primary.main,
  },
  "& .like-icon": {
    cursor: 'pointer',
    color: theme.palette.secondary.main
  },
  "& .like-icon:active": {
    color: theme.palette.error.main,
    transform: "scale(1.5)",
  }
}));

type MusicCardProps = {
  item: any
}

export const MusicCard: React.FC<MusicCardProps> = ({ item }) => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [audio] = useState(new Audio(item.music_file_path));

  const toggle = () => setIsPlaying(!isPlaying);

  const postLike = (id: string) => {
    const removeSpaces = id.replace(/\s+/g, '')
    console.log(removeSpaces)

    fetch('https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8', {
      method: 'POST',
      body: JSON.stringify({ id: removeSpaces }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => res.json())
      .then((result) => {
        console.log(result)
        alert(JSON.stringify(result, null, 2))
      })
      .catch((err) => console.log('error'))
  }

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  },
    [isPlaying]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);


  return (
    <StyledCard sx={{ display: 'flex', justifyContent: 'space-evenly' }} key={item.id}>
      <Box sx={{ display: 'flex', flexDirection: 'column', margin: '2rem' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5" className='on-hover'>
            {item.name}
          </Typography>
          <Typography variant="subtitle1" color="primary.light" className='on-hover'>
            {item.artist_name}
          </Typography>
        </CardContent>

        <Box className='margin-bottom'>
          <audio controls>
            <source src={item.music_file_path} type={item.music_file_mimetype} />
            Your browser does not support the audio element.
          </audio>
        </Box>

        <CardActions>
          <DataStyle onClick={() => postLike(item.id)}>
            <ThumbUpIcon fontSize="small" className='like-icon' />
            <Typography variant="body2" sx={{ marginLeft: "1em" }} color="primary.light"><strong>{item.likes}</strong> Likes</Typography>
          </DataStyle>

          <DataStyle>
            <FavoriteBorderOutlinedIcon color="disabled" fontSize="small" />
            <Typography variant="body2" color="text.disabled" sx={{ marginLeft: "1em" }}><strong>{item.faves}</strong> Favourites</Typography>
          </DataStyle>

          <div>
            <button onClick={toggle}>{isPlaying ? "Pause" : "Play"}</button>
          </div>
        </CardActions>
      </Box>

      <div className="outer-div">
        <CardMedia
          component="img"
          sx={{ height: 300, width: 300 }}
          image={item.cover_image_path}
          alt={item.name}
          className="cover-image"
        />

        {isPlaying ? <PauseCircleOutlineIcon className="hover-img" color='secondary'
          onClick={toggle}
          sx={{
            fontSize: 200,
            cursor: 'pointer',
          }}
        /> : <PlayCircleOutlineIcon className="hover-img" color='secondary'
          onClick={toggle}
          sx={{
            fontSize: 200,
            cursor: 'pointer',
          }}
        />}
      </div>

    </StyledCard>
  )
}

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
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

interface BasicListProps {
  items: any[]
}

const DataStyle = styled('div')(() => ({
  display: 'inline-flex',
  padding: '0.1rem',
  marginLeft: '1rem',
  // fontSize: '6'
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
}));


export const BasicList: React.FC<BasicListProps> = ({ items }) => {
  const theme = useTheme();

  const postLike = (id) => {
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
            <StyledCard sx={{ display: 'flex', justifyContent: 'space-evenly' }} key={item.id}>
              <Box sx={{ display: 'flex', flexDirection: 'column', margin: '2rem' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h5" className='on-hover'>
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" className='on-hover'>
                    {item.artist_name}
                  </Typography>
                </CardContent>

                <Box className='margin-bottom'>
                  <audio controls>
                    <source src={item.music_file_path} type={item.music_file_mimetype} />
                    Your browser does not support the audio element.
                  </audio>
                </Box>

                <DataStyle>
                  <FavoriteBorderOutlinedIcon color="info" fontSize="small" />
                  <Typography variant="body2" sx={{ marginLeft: "1em" }}><strong>{item.faves}</strong> Favourites</Typography>
                </DataStyle>

                <DataStyle onClick={() => postLike(item.id)}>
                  <ThumbUpOutlinedIcon color="warning" fontSize="small" sx={{ cursor: 'pointer' }} />
                  <Typography variant="body2" sx={{ marginLeft: "1em" }}><strong>{item.likes}</strong> Likes</Typography>
                </DataStyle>

              </Box>

              <CardMedia
                component="img"
                sx={{ height: 300, width: 300 }}
                image={item.cover_image_path}
                alt={item.name}
              />
            </StyledCard>
          </>
        ))}
      </List>
    </Box >
  )
}

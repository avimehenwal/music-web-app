import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { margin } from "@mui/system";
import { styled } from '@mui/material/styles';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

interface SongDetailProps {
  data: any
}

const DataStyle = styled('div')(({ theme }) => ({
  marginTop: '0em',
  // paddingBottom: '0.5rem'
}));


export const SongDetail: React.FC<SongDetailProps> = ({ data }) => {
  return (
    <Box sx={{ marginLeft: "2em" }}>
      <Typography variant="h2" color="primary" sx={{ marginBottom: "0.5em" }}>
        {data.name}
        <Typography variant="body1" color="primary.light">
          {data.artist_name}
        </Typography>
      </Typography>

      <DataStyle>
        <ListItemIcon>
          <FavoriteBorderOutlinedIcon color="error" fontSize="small" />
          <Typography variant="body2" sx={{ marginLeft: "1em" }}><strong>{data.faves}</strong> Favourites</Typography>
        </ListItemIcon>
      </DataStyle>

      <DataStyle>
        <ListItemIcon>
          <ThumbUpOutlinedIcon color="secondary" fontSize="small" />
          <Typography variant="body2" sx={{ marginLeft: "1em" }}><strong>{data.likes}</strong> Likes</Typography>
        </ListItemIcon>
      </DataStyle>

      <audio controls>
        <source src={data.music_file_path} type={data.music_file_mimetype} />
        Your browser does not support the audio element.
      </audio>

      {/* <p><Typography variant="caption">{JSON.stringify(data)}</Typography></p> */}
    </Box >
  )
}

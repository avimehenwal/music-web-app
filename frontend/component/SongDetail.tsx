import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface SongDetailProps {
  data: any
}

export const SongDetail: React.FC<SongDetailProps> = ({ data }) => {
  return (
    <Box sx={{ marginLeft: "2em" }}>
      <Typography variant="h4">{data.name}</Typography>
      <p>{JSON.stringify(data)}</p>
    </Box>
  )
}

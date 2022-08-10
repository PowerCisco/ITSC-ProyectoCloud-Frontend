
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const LoadingPage = () => {
  
  return (

        <Box sx={{ display: 'flex', width: 200, height: 200, left: "50%", top:"50%", position: 'absolute' }}>
          <CircularProgress size={120} />
        </Box>
      );
  }
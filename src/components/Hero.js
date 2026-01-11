import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';

const Hero = ({ mode }) => {
  return (
    <Box
      sx={{
        bgcolor: mode === 'dark' ? '#2d2d2d' : '#ffffff',
        pt: 10,
        pb: 8,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx={{ 
            fontWeight: 300,
            color: mode === 'dark' ? '#fff' : '#212121' 
          }}
        >
          Album layout
        </Typography>
        
        <Typography 
          variant="h5" 
          align="center" 
          paragraph
          sx={{ 
            color: mode === 'dark' ? '#b0b0b0' : '#616161',
            fontWeight: 300 
          }}
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button 
            variant="contained" 
            sx={{ 
              textTransform: 'none',
              px: 3,
              py: 1,
              bgcolor: '#e65100',
              '&:hover': { bgcolor: '#bf360c' }
            }}
          >
            Main call to action
          </Button>

          <Button 
            variant="outlined" 
            sx={{ 
              textTransform: 'none',
              px: 3,
              py: 1,
              color: mode === 'dark' ? '#90caf9' : '#e65100',
              borderColor: mode === 'dark' ? '#90caf9' : '#e65100'
            }}
          >
            Secondary action
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
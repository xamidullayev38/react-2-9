import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = ({ mode }) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        bgcolor: mode === 'dark' ? '#2d2d2d' : '#f5f5f5', // Rasmdagi kabi kulrang fon
        textAlign: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'Copyright © '}
          <Link color="inherit" href="#">
            Your Website
          </Link>{' '}
          2026.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
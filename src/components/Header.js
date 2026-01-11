import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Header = ({ mode, toggleTheme }) => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        bgcolor: mode === 'dark' ? '#1e1e1e' : '#e65100',
        backgroundImage: 'none'
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <PhotoCamera sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Album layout
          </Typography>
        </Box>

        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
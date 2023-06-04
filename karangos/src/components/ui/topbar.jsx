import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/karangos-logo-600px.png'
import MainMenu from './mainmenu';

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar variant="dense">
            <MainMenu/>
            <a href="/">
              <img src={logo} alt="Logotipo Karangos" style={{ width: '300px' }} />
            </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
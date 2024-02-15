import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function NavBar({ username, onLogout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cosmo Colonizer
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{
            '&:hover': {
              bgcolor: '#212121',
            },
            marginRight: '5px',
            textTransform: 'none',
            fontSize: '16px'
          }}>View Data
        </Button>
        <Button color="inherit" component={Link} to="/evaluation" sx={{
            '&:hover': {
              bgcolor: '#212121',
            },
            marginRight: '5px',
            textTransform: 'none',
            fontSize: '16px'
          }}>Evalutation
        </Button>
        <Button
          color="inherit"
          onClick={handleMenu}
          sx={{
            '&:hover': {
              bgcolor: '#212121',
            },
            textTransform: 'none', 
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px', // This controls the space between the icon and the username
          }}
        >
          <AccountCircleIcon sx={{ fontSize: '24px' }} />{username}
        </Button>
        
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My Profile</MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            onLogout();
          }}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

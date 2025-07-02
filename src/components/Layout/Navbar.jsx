import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Avatar,
  IconButton
} from '@mui/material';
import {
  AccountCircle,
  Person,
  SportsEsports,
  Logout
} from '@mui/icons-material';
import { useAuthContext } from '../../contexts/AuthContext';
import LoginDialog from '../Auth/LoginDialog';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuthContext();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    setLoginDialogOpen(true);
  };

  const handleLoginClose = () => {
    setLoginDialogOpen(false);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const handleProfile = () => {
    // Aquí puedes agregar navegación al perfil
    console.log('Ir al perfil');
    handleMenuClose();
  };

  const handlePlay = () => {
    // Aquí puedes agregar navegación al juego
    console.log('Ir al juego');
    handleMenuClose();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gaver
          </Typography>
          
          {isAuthenticated ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  {user?.name?.charAt(0) || 'U'}
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleProfile}>
                  <Person sx={{ mr: 1 }} />
                  Perfil
                </MenuItem>
                <MenuItem onClick={handlePlay}>
                  <SportsEsports sx={{ mr: 1 }} />
                  Jugar
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ mr: 1 }} />
                  Cerrar sesión
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              color="inherit"
              startIcon={<AccountCircle />}
              onClick={handleLoginClick}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <LoginDialog 
        open={loginDialogOpen} 
        onClose={handleLoginClose} 
      />
    </>
  );
};

export default Navbar; 
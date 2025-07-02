import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Sitemark from '../Landing/SitemarkIcon';
import { useAuthContext } from '../../contexts/AuthContext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthContext();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    handleProfileMenuClose();
    navigate('/');
  };

  const handleProfile = () => {
    handleProfileMenuClose();
    // Aquí puedes navegar al perfil del usuario
    // navigate('/profile');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Compensar la altura de la barra de navegación
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Cerrar el drawer móvil si está abierto
    setOpen(false);
  };

  const getUserDisplayName = () => {
    if (!user) return 'Usuario';
    if (user.first_name && user.last_name) {
      return `${user.first_name} ${user.last_name}`;
    }
    if (user.first_name) return user.first_name;
    if (user.username) return user.username;
    return user.email;
  };

  const getUserInitials = () => {
    if (!user) return 'U';
    if (user.first_name && user.last_name) {
      return `${user.first_name[0]}${user.last_name[0]}`.toUpperCase();
    }
    if (user.first_name) return user.first_name[0].toUpperCase();
    if (user.username) return user.username[0].toUpperCase();
    return user.email[0].toUpperCase();
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              <Sitemark />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button 
                variant="text" 
                color="info" 
                size="small"
                onClick={() => scrollToSection('features')}
              >
                Features
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small"
                onClick={() => scrollToSection('testimonials')}
              >
                Testimonials
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small"
                onClick={() => scrollToSection('highlights')}
              >
                Highlights
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small"
                onClick={() => scrollToSection('pricing')}
              >
                Pricing
              </Button>
              <Button 
                variant="text" 
                color="info" 
                size="small" 
                sx={{ minWidth: 0 }}
                onClick={() => scrollToSection('faq')}
              >
                FAQ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            {isAuthenticated ? (
              <>
                <Tooltip title="Perfil de usuario">
                  <IconButton
                    onClick={handleProfileMenuOpen}
                    sx={{ ml: 2 }}
                    aria-controls={anchorEl ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorEl ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                      {getUserInitials()}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={!!anchorEl}
                  onClose={handleProfileMenuClose}
                  onClick={handleProfileMenuClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleProfile}>
                    <AccountCircleIcon sx={{ mr: 1 }} />
                    {getUserDisplayName()}
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    Cerrar sesión
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button color="primary" variant="text" size="small" onClick={handleSignIn}>
                  Iniciar sesión
                </Button>
                <Button color="primary" variant="contained" size="small" onClick={handleSignUp}>
                  Registrarse
                </Button>
              </>
            )}
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem onClick={() => scrollToSection('features')}>Features</MenuItem>
                <MenuItem onClick={() => scrollToSection('testimonials')}>Testimonials</MenuItem>
                <MenuItem onClick={() => scrollToSection('highlights')}>Highlights</MenuItem>
                <MenuItem onClick={() => scrollToSection('pricing')}>Pricing</MenuItem>
                <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                <Divider sx={{ my: 3 }} />
                
                {isAuthenticated ? (
                  <>
                    <MenuItem>
                      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <Avatar sx={{ width: 32, height: 32, mr: 2, bgcolor: 'primary.main' }}>
                          {getUserInitials()}
                        </Avatar>
                        <Box>
                          <Box sx={{ fontWeight: 'bold' }}>{getUserDisplayName()}</Box>
                          <Box sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                            {user?.email}
                          </Box>
                        </Box>
                      </Box>
                    </MenuItem>
                    <Divider sx={{ my: 1 }} />
                    <MenuItem onClick={handleLogout}>
                      Cerrar sesión
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <Button color="primary" variant="contained" fullWidth onClick={handleSignUp}>
                        Registrarse
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button color="primary" variant="outlined" fullWidth onClick={handleSignIn}>
                        Iniciar sesión
                      </Button>
                    </MenuItem>
                  </>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

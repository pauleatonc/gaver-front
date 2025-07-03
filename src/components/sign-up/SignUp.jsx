import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import AppTheme from '../../shared-theme/AppTheme';
import ColorModeSelect from '../../shared-theme/ColorModeSelect';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';
import { useAuthContext } from '../../contexts/AuthContext';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignUp(props) {
  const navigate = useNavigate();
  const { register, loading, error } = useAuthContext();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');
  const [validationError, setValidationError] = React.useState('');

  const handleSignInClick = () => {
    navigate('/sign-in');
  };

  const handleFieldChange = () => {
    // Limpiar error de validación cuando el usuario comience a escribir
    if (validationError) {
      setValidationError('');
    }
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');

    let isValid = true;
    const missingFields = [];

    // Limpiar errores previos
    setValidationError('');

    // Validar nombre
    if (!firstName.value || firstName.value.trim().length < 1) {
      setFirstNameError(true);
      setFirstNameErrorMessage('El nombre es obligatorio.');
      missingFields.push('nombre');
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage('');
    }

    // Validar apellido
    if (!lastName.value || lastName.value.trim().length < 1) {
      setLastNameError(true);
      setLastNameErrorMessage('El apellido es obligatorio.');
      missingFields.push('apellido');
      isValid = false;
    } else {
      setLastNameError(false);
      setLastNameErrorMessage('');
    }

    // Validar email
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Por favor ingresa un email válido.');
      if (!email.value) {
        missingFields.push('correo electrónico');
      }
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    // Validar contraseña
    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('La contraseña debe tener al menos 6 caracteres.');
      if (!password.value) {
        missingFields.push('contraseña');
      }
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    // Validar confirmar contraseña
    if (!confirmPassword.value) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Por favor confirma tu contraseña.');
      missingFields.push('confirmar contraseña');
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Las contraseñas no coinciden.');
      isValid = false;
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage('');
    }

    // Mostrar alerta general si faltan campos obligatorios
    if (missingFields.length > 0) {
      const fieldsText = missingFields.join(', ');
      setValidationError(`Faltan campos obligatorios: ${fieldsText}`);
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
    
    if (!validateInputs()) {
      return;
    }

    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email'),
      password: data.get('password'),
      confirm_password: data.get('confirmPassword'),
      first_name: data.get('firstName'),
      last_name: data.get('lastName'),
    };

    const result = await register(formData);
    
    if (result.success) {
      // Redirigir al usuario tras registro exitoso
      navigate('/');
    } else if (result.error && result.error.email) {
      // Mostrar error específico del campo email
      setEmailError(true);
      setEmailErrorMessage(result.error.email[0] || 'Este email ya está registrado.');
    }
  };

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <SitemarkIcon />
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Registrarse
          </Typography>
          
          {/* Mostrar error del contexto de autenticación */}
          {error && (
            <Alert severity="error" sx={{ width: '100%' }}>
              {error}
            </Alert>
          )}
          
          {/* Mostrar error de validación */}
          {validationError && (
            <Alert severity="warning" sx={{ width: '100%' }}>
              {validationError}
            </Alert>
          )}
          
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="firstName">Nombre *</FormLabel>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                placeholder="Juan"
                error={firstNameError}
                helperText={firstNameErrorMessage}
                color={firstNameError ? 'error' : 'primary'}
                onChange={handleFieldChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="lastName">Apellido *</FormLabel>
              <TextField
                autoComplete="family-name"
                name="lastName"
                required
                fullWidth
                id="lastName"
                placeholder="Pérez"
                error={lastNameError}
                helperText={lastNameErrorMessage}
                color={lastNameError ? 'error' : 'primary'}
                onChange={handleFieldChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Correo electrónico *</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="tu@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={emailError ? 'error' : 'primary'}
                onChange={handleFieldChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Contraseña * (mínimo 6 caracteres)</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage || "La contraseña debe tener al menos 6 caracteres"}
                color={passwordError ? 'error' : 'primary'}
                onChange={handleFieldChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="confirmPassword">Confirmar contraseña *</FormLabel>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                placeholder="••••••"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                variant="outlined"
                error={confirmPasswordError}
                helperText={confirmPasswordErrorMessage}
                color={confirmPasswordError ? 'error' : 'primary'}
                onChange={handleFieldChange}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Quiero recibir actualizaciones por correo electrónico."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
            >
              {loading ? 'Registrándose...' : 'Registrarse'}
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: 'text.secondary' }}>o</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Registrarse con Google')}
              startIcon={<GoogleIcon />}
            >
              Registrarse con Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Registrarse con Facebook')}
              startIcon={<FacebookIcon />}
            >
              Registrarse con Facebook
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              ¿Ya tienes una cuenta?{' '}
              <Link
                component="button"
                variant="body2"
                onClick={handleSignInClick}
                sx={{ 
                  alignSelf: 'center',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Iniciar sesión
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}

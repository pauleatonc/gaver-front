import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  {
    title: 'Professional',
    subheader: 'Recommended',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
      'Dedicated team',
      'Best deals',
    ],
    buttonText: 'Start now',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Pricing
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Quickly build an effective pricing table for your potential customers with
          this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'stretch', justifyContent: 'center', width: '100%' }}
      >
        {tiers.map((tier) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={tier.title}
          >
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.shadows[8],
                },
                ...(tier.title === 'Professional' && {
                  border: '2px solid',
                  borderColor: 'primary.main',
                  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                  color: 'white',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[12],
                    background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                  },
                }),
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography 
                    component="h3" 
                    variant="h5"
                    sx={{ 
                      fontWeight: 600,
                      color: tier.title === 'Professional' ? 'white' : 'text.primary',
                    }}
                  >
                    {tier.title}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip 
                      icon={<AutoAwesomeIcon />} 
                      label={tier.subheader}
                      sx={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                  <Typography 
                    component="h3" 
                    variant="h3"
                    sx={{ 
                      fontWeight: 700,
                      color: tier.title === 'Professional' ? 'white' : 'text.primary',
                    }}
                  >
                    ${tier.price}
                  </Typography>
                  <Typography 
                    component="span" 
                    variant="h6"
                    sx={{ 
                      color: tier.title === 'Professional' ? 'rgba(255, 255, 255, 0.8)' : 'text.secondary',
                    }}
                  >
                    &nbsp; per month
                  </Typography>
                </Box>
                <Divider 
                  sx={{ 
                    my: 2, 
                    opacity: 0.8, 
                    borderColor: tier.title === 'Professional' ? 'rgba(255, 255, 255, 0.3)' : 'divider' 
                  }} 
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color: tier.title === 'Professional' ? 'rgba(255, 255, 255, 0.8)' : 'primary.main',
                      }}
                    />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{
                        color: tier.title === 'Professional' ? 'rgba(255, 255, 255, 0.9)' : 'text.secondary',
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions sx={{ pt: 0 }}>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  color={tier.buttonColor}
                  size="large"
                  sx={{
                    fontWeight: 600,
                    py: 1.5,
                    ...(tier.title === 'Professional' && {
                      backgroundColor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }),
                  }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

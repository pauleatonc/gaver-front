import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Adaptable performance',
    description:
      'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Great user experience',
    description:
      'Integrate our product into your routine with an intuitive and easy-to-use interface.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Innovative functionality',
    description:
      'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Reliable support',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
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
            mb: 4,
          }}
        >
          <Typography 
            component="h2" 
            variant="h4" 
            gutterBottom
            sx={{ 
              color: 'white',
              fontWeight: 600,
              mb: 2,
            }}
          >
            Highlights
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'grey.300',
              lineHeight: 1.6,
            }}
          >
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'grey.800',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  color: 'white',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: (theme) => theme.shadows[8],
                    backgroundColor: 'grey.700',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box 
                  sx={{ 
                    opacity: 0.7, 
                    mb: 2,
                    color: 'primary.light',
                    fontSize: '2rem',
                  }}
                >
                  {item.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      color: 'white',
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'grey.300',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

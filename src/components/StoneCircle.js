import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import EscalatorWarningRoundedIcon from '@mui/icons-material/EscalatorWarningRounded';


const fourTruths = [
  {
    avatar: <ExploreRoundedIcon />,
    name: 'Directions',
    text:
      "North (Wisdom), South (Passion), East (Beginnings), West (Endings)",
  },
  {
    avatar: <PublicRoundedIcon />,
    name: 'Elements',
    text:
      "Earth (Stability), Air (Clarity), Fire (Transformation), Water (Healing)",
  },
  {
    avatar: <WbSunnyRoundedIcon />,
    name: 'Seasons',
    text:
      'Spring (Renewal), Summer (Growth), Autumn (Harvest), Winter (Rest)',
  },
  {
    avatar: <EscalatorWarningRoundedIcon />,
    name: 'Phases of Life',
    text:
      "Birth, Youth, Maturity, Elderhood",
  },
];

export default function StoneCircle() {

  return (
    <Container
      id="stoneCircle"
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
          Standing Stones
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          The Henge is modeled after the ancient stone circles of Ireland, Scotland, and Western Europe,
          where standing stones have long marked sacred spaces of ceremony, transformation, and
          connection. Each stone is aligned with the four cardinal directions representing not only geographic orientation but also profound spiritual truths:
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {fourTruths.map((truth, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              
                <CardHeader
                  avatar={truth.avatar}
                  title={truth.name}
                />
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {truth.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

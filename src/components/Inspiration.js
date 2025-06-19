import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChildCareRoundedIcon from '@mui/icons-material/ChildCareRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import FoundationRoundedIcon from '@mui/icons-material/FoundationRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';

const items = [
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Simple beginings',
    description:
      'In the spirit of these ancestral roots, I selected stones and commissioned a Standing Stone Circle on our farm in the Nebraska prairie.',
  },
  {
    icon: <FavoriteIcon />,
    title: 'Spiritual healing',
    description:
      'It is a place of connection with nature, grounding, and healing. Rocks and stones have always carried sacred power.',
  },
  {
    icon: <ChildCareRoundedIcon />,
    title: 'A simple truth',
    description:
      'Children know this instinctively—they pick up rocks and carry them home in their pockets like treasures.',
  },
  {
    icon: <FoundationRoundedIcon />,
    title: 'The importance of stone',
    description:
      'We often build our homes from stone, we wear gems around our necks, and on our wedding day, we often give one another a stone, a diamond within a ring.',
  },
  {
    icon: <Diversity3RoundedIcon />,
    title: 'Universal experience',
    description:
      'Rocks and stone circles are not limited to any one idea of religion, they are for everyone of all beliefs.',
  },
  {
    icon: <VolunteerActivismRoundedIcon />,
    title: 'All are welcome',
    description:
      'The rocks remember. And here, in this Circle, they are ready to hold your story too.',
  },
];

export default function Inspiration() {
  return (
    <Box
      id="inspiration"
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
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Inspiration
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Long before the cathedrals, before stained glass and pews, my ancestors in western
            Germany and the surrounding countries, stood barefoot in sacred circles of stone. They
            worshipped in rhythm with the earth, sky, and stars. My ancestors were druids before
            Christianity arrived to the area.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

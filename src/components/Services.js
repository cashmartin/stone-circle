import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import StreamRoundedIcon from '@mui/icons-material/StreamRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';

import StandingStonePhoto from '../images/mom-center.jpg';
import TherapyRoomPhoto from '../images/moms-therapy-room.jpg';
import SpeakerPhoto from '../images/mom-inspo-speaker.jpg';

const items = [
  {
    icon: <StreamRoundedIcon />,
    title: 'Standing Stones',
    description:
      '* Ceremonies in the Circle — Rituals for healing, blessing, release, marriage, memorial, seasonal turning, and more, surrounded by the standing stones.\r\n* Personal Retreats — Come alone or with your circle. Step away from the clamor of life and into a quiet sanctuary for your soul.',
    imageLight: `url(${StandingStonePhoto})`,
  },
  {
    icon: <SpaRoundedIcon />,
    title: 'Therapy Room',
    description:
      '* Spiritual Guidance Counseling — One-on-one or group sessions held in the warm, welcoming therapy room within my home. A place to speak freely and be deeply heard.',
    imageLight: `url(${TherapyRoomPhoto})`,
  },
  {
    icon: <RecordVoiceOverRoundedIcon />,
    title: 'Inspirational Speaker',
    description:
      '* Guest Speaking Engagements — I travel to speak at businesses, non-profits, gatherings, and community groups. My public speaking offers humor, inspiration, energy, and connection. I tailor my topic around the theme of your ' +
      'event. I don\'t just speak. I energize. I inspire. I entertain. I stir the room with laughter, story, and spirit. If you need a speaker who can light up a space and bring people together, I am the person you need.',
    imageLight: `url(${SpeakerPhoto})`,
  },
];

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => !!selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: (theme.vars || theme).palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
      },
    },
  ],
}));

const MobileLayout = (data) => {
  if (!items[data.selectedItemIndex]) {
    return <p>no image</p>;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => data.handleItemClick(index)}
            selected={data.selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={{
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
          }}
          style={
            items[data.selectedItemIndex]
              ? ({
                '--items-imageLight': items[data.selectedItemIndex].imageLight,
              })
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {data.selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {data.selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Services() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="services" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Services
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 1, sm: 4 } }}
        >
          Here on the prairie—surrounded by the strength of ancient stone and the wide-open
          sky—I offer a space for sacred connection, soulful reflection, and community ritual. Let
          your spirit come home here.
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 4, sm: 0 }, display: { xs: 'normal', sm: 'none'}  }}
        >
          Click the buttons below to learn about each service.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: (theme.vars || theme).palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'var(--items-image-height)',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                margin: '120px auto auto auto',
                width: 460,
                height: 400,
                backgroundSize: 'contain',
                backgroundImage: 'var(--items-imageLight)',
                backgroundRepeat: 'no-repeat',
              }}
              style={
                items[selectedItemIndex]
                  ? ({
                    '--items-imageLight': items[selectedItemIndex].imageLight,
                  })
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

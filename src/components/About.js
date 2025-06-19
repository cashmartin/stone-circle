import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StoneCirclePhoto from '../images/mom-cropped-in.JPG';

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        width: '100%',
        marginTop: '-50px',
      }}
    >
      <Container
        sx={{ py: { xs: 8, sm: 16 } }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            alignItems: 'left',
          }}
        >
          Meet Reverend Dr. Renae Koehler
        </Typography>
        <Box sx={{}}>
          <Box sx={{ width: { md: '35%', lg: '30%' }, float: 'right', maxWidth: '50%', marginLeft: '20px', }}>
            <img src={StoneCirclePhoto} alt='Reverend Dr. Renae Koehler' style={{ maxWidth: '100%', height: 'auto', borderRadius: '7px' }} />
          </Box>
          <Typography
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
            }}
          >
            With 32 years of Christian ministry experience and a deep understanding of Ancient Folk
            Spirituality, Christianity, Judaism, Islam, Buddhism, and Hinduism, Reverend Dr. Renae Koehler
            brings a wealth of spiritual knowledge to The Henge. <br /> <br /> 
            She holds a Master of Divinity from
            Emory University's Candler School of Theology in Atlanta, Georgia and a Doctorate in Ritual
            Studies from Chicago Theological Seminary. <br /> <br />
            Her extensive travels have taken her to sacred sites
            across the globe, including Europe, India, Africa, Ireland, Peru, Cambodia, Mexico, and the
            iconic Chartres Cathedral in France, where she has studied diverse spiritual rituals and traditions. <br /> <br />
            Renae has also taught classes in World Religions at the University of Nebraska, Lincoln.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

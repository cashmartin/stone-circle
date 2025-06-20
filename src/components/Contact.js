import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StoneCirclePhoto from '../images/stone-circle-5.jpg'

export default function Contact() {

  return (
    <Container id="contact" sx={{
        pt: { xs: 4, sm: 12 },
        pb: 0,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box sx={{
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
          Contact
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          email: standingstonecircle@gmail.com
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          Begin your spiritual journey with Reverend Dr. Renae Koehler. Schedule a session, join a course,
          or inquire about upcoming retreats through this website. All offerings are available for online
          booking, and Zoom appointments are offered for those near and far.<br /> <br />
          Coming soon: Book sessions through Calendly!
        </Typography>
        <Box sx={{ marginTop: '50px' }}>
          <img src={StoneCirclePhoto} alt='large standing stone circle' style={{maxWidth: '100%', height: 'auto', borderRadius: '7px', boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)', outline: '6px solid', outlineColor: 'hsla(220, 25%, 80%, 0.2)', }} />
        </Box>
      </Box>
    </Container>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import StoneCirclePhoto from '../images/stone-circle-4.jpg';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              alignItems: 'center',
              fontSize: { xs: 'clamp(2rem, 8vw, 2.5rem)' , sm: 'clamp(3rem, 10vw, 3.5rem)' },
              marginBottom: '10px',
            }}
          >
            Welcome&nbsp;to&nbsp;the&nbsp; 
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'inherit',
                color: 'primary.main',
              }}
            >
              Standing&nbsp;Stone&nbsp;Circle
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            The Standing Stone Circle on the Prairie in Nebraska <br /> <br/>
            Counseling | Spiritual Guidance | Ancient Wisdom | Sacred Ritual
          </Typography>
        </Stack>
        <Box sx={{ marginTop: '50px' }}>
          <img src={StoneCirclePhoto} alt='large standing stone circle' style={{maxWidth: '100%', height: 'auto', border: '1px solid', borderRadius: '7px', boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)', outline: '6px solid', outlineColor: 'hsla(220, 25%, 80%, 0.2)', }} />
        </Box>
      </Container>
    </Box>
  );
}

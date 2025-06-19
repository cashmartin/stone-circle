import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function ActiveSessions() {

  return (
    <Container id="activeSessions" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          You Are Invited to a Sacred Night Retreat:<br />“Stones of the Soul”
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          Friday, June 27th<br />

          10:00 p.m. – 11:00 p.m.<br />

          Under the Stars | Candlelight Ceremony<br />

          $32 per person<br /><br />


          When the summer heat softens and the night sky stretches wide with mystery, you are invited to gather in quiet reverence for a one-hour retreat of healing and renewal. Beneath the stars, by candlelight, we will enter into sacred stillness.
              <br /><br />

          Each participant will hold a stone of their choosing—carried from a river, found in a field, or kept close to the heart. These stones will become our companions, carriers of story and strength, as we honor the deep and ancient wisdom of the earth.
              <br /><br />

          I will guide the ceremony as your officiant, offering words of reflection and gentle ritual. Together, we will release what is heavy, remember what is holy, and renew what is ready.
              <br /><br />

          Come, breathe in the cool night air. Let the stones speak. Let your soul rest.<br />

          Limit of 12 participants<br />

          To reserve your place, sign up by emailing stone-circle-email-adress-here<br />

          Bring your chosen stone.<br /><br />


          You are welcome here.<br />

          Let the healing begin.<br />
        </Typography>
      </Box>
    </Container>
  );
}

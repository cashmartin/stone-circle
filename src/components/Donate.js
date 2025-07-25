import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Donate() {

  return (
    <Container id="donate" sx={{
      pt: { xs: 4, sm: 12 },
      pb: { xs: 8, sm: 16 },
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
          Donate
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          Your donations help keep the Standing Stone Circle open to all. Therapy sessions are offered on a pay-as-you're-able basis, and your support makes that possible. Thank you!
        </Typography>
        <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
          {/* Stripe Donate Button */}
          <div>
            <a
              href="https://buy.stripe.com/test_XXXXXXXXXXXXXX" // Replace with your Stripe Payment Link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Donate via Stripe
            </a>
          </div>

          {/* PayPal Donate Button */}
          <div>
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID" /> {/* Replace with your real ID */}
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>

          {/* Venmo QR or Link */}
          <div>
            <a
              href="https://venmo.com/u/YourUsername" // Replace with your Venmo profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Donate via Venmo:<br />@Renae-Koehler
            </a>
            <img
              src="/venmo-qr.png" // Replace with your actual QR code image or use Venmo.me link
              alt="Venmo QR Code"
              className="mx-auto mb-2 w-40"
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
}

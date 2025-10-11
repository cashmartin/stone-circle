import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { format, isAfter, isEqual } from 'date-fns';

const upcomingEvents = [
  {
    name: 'Morning Renewal',
    time:  new Date(2025, 8, 17, 8, 0), // Sept 17, 2025, 8:00 AM
    text:
      "While the dew still clings to the clover, we gather. A ceremony of illumination, where " +
      "timeless teachings meet morning sky. Refresh yourself on this morning of healing for " +
      "your body, mind, and spirit. " +
      "In a world that rushes, this is the hour to rest, reset, and receive. Join the healing circle " +
      "within the standing stones as we call upon ancient wisdom, breath, and intention to " +
      "realign body, mind, and spirit. The stones will hold you; the morning light will cleanse " +
      "you. Come home to yourself.",
  },
  {
    name: 'Fear to Freedom with Jane Baird Tinkler',
    time: new Date(2025, 8, 20, 13, 0), // Sept 20, 2025, 1:00 PM
    text:
      "Led by Jane Baird Tinkler, Certified Nature Therapist. " +
      "Learn about the Elemental Courage that helps us find the stillness beneath the fear during these uncertain times. Experience calm among the stones and sky.",
  },
  {
    name: 'Autumn Equinox - Rebalancing',
    time: new Date(2025, 8, 22, 19, 0), // Sept 22, 2025, 7:00 PM
    text:
      "This is the moment Earth pauses. Light and darkness hold hands across the horizon. " +
      "Join us at the Standing Stone Circle for an equinox ceremony of sacred balance, " +
      "gratitude, and letting go. What will you release? What will you harvest? Bring yourself " +
      "just as you are—on this holy hinge between seasons.",
  },
  {
    name: 'Full Moon - a Time to Recharge',
    time: new Date(2025, 9, 6, 20, 0), // Oct 6, 2025, 8:00 PM
    text:
      ""
  },
  {
    name: 'Draconids Meteor Shower Viewing',
    time: new Date(2025, 9, 9, 20, 0), // Oct 9, 2025, 8:00 PM
    text:
      ""
  },
  {
    name: 'Soul Nourishing',
    time: new Date(2025, 9, 19, 19, 0), // Oct 19, 2025, 7:00 PM
    text:
      ""
  },
  {
    name: 'Orionids Meteor Shower Viewing',
    time: new Date(2025, 9, 22, 7, 0), // Oct 22, 2025, 7:00 AM
    text:
      ""
  },
  {
    name: 'All Hallows Eve Fellowship',
    time: new Date(2025, 9, 31, 19, 0), // Oct 31, 2025, 7:00 PM
    text:
      ""
  },
  {
    name: 'Supermoon - a Time to Revitalize',
    time: new Date(2025, 10, 5, 19, 0), // Nov 5, 2025, 7:00 PM
    text:
      ""
  },
  {
    name: 'Spiritual Renewal',
    time: new Date(2025, 10, 16, 19, 0), // Nov 16, 2025, 7:00 PM
    text:
      ""
  },
  {
    name: 'Leonids Meteor Shower Viewing',
    time: new Date(2025, 10, 18, 7, 0), // Nov 18, 2025, 7:00 AM
    text:
      ""
  },
  {
    name: 'Nature Therapy Session: Woven in Earth, Air, Fire, and Water - Led by Jane Baird Tinkler, Nature Therapist',
    time: new Date(2025, 10, 22, 10, 0), // Nov 22, 2025, 10:00 AM
    text:
      ""
  },
  {
    name: 'Supermoon - a Time to Revitalize',
    time: new Date(2025, 11, 4, 19, 0), // Dec 4, 2025, 7:00 PM
    text:
      ""
  },
  {
    name: 'Winter Solstice - Rebalancing',
    time: new Date(2025, 11, 21, 15, 0), // Dec 21, 2025, 3:00 PM
    text:
      ""
  },
];

export default function StoneCircle() {
  const now = new Date();

  const filteredEvents = upcomingEvents.filter(event =>
    isAfter(event.time, now) || isEqual(event.time, now)
  );

  return (
    <Container
      id="activeSessions"
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
          Upcoming Events
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Events held at the Standing Stone Circle are made possible by the generous support of donations.
          Everyone is welcome, and no one is turned away. You are
          invited to wear clothing that you are comfortable in as we sit upon the earth - I will
          provide a lawn chair for you, if needed. You will be invited to take off your shoes before
          entering the soft clover inside of the circle. Limit of 20 people per ceremony.<br /><br />
          For any inquiries please email standingstonecircle@gmail.com
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {filteredEvents.map((event, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
              }}
            >

              <CardHeader
                title={event.name}
              />
              <Typography
                variant="h7"
                sx={{ margin: '0 0 10px 16px', }}
              >
                {format(event.time, "EEEE, MMMM d, h:mm a")}
              </Typography>
              {/* <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {event.text}
                </Typography>
              </CardContent> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

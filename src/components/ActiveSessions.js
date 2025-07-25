import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const upcomingEvents = [
  {
    name: 'Delta Aquarids Meteor Shower Viewing Ceremony',
    time: 'Monday, July 30, 2025 • 11PM-Midnight',
    text:
      "When the world slumbers, we gather to the sound of a drum circle and then lay down on " +
      "the clover inside of the standing stone circle to watch the heavens dance. Join us under " +
      "the deep indigo sky as meteors slice through the night like ancient fire-script. Lay back, " +
      "breathe in the cosmos, and let the silence of starlight teach you something you didn't " +
      "know you were longing for.",
  },
  {
    name: 'The Druid Lammas: Morning Harvest Ceremony',
    time: 'Saturday, August 2, 2025 • 7AM-8AM',
    text:
      "Come, celebrate the turning of the wheel! Lammas brings the first fruits, the golden " +
      "grain, the bread of gratitude. Inside of the standing stone circle, we'll bless what we've " +
      "gathered and what we still hope to grow. There will be ritual, joy, and laughter enough to " +
      "feed the soul. The Earth is generous—so shall we be.",
  },
  {
    name: 'Full Moon Ceremony: The Hermetica',
    time: 'Saturday, August 9, 2025 • 10PM-11PM',
    text:
      "The moon will rise like a silver oracle, and we shall gather inside of the standing stone " +
      "circle to listen to the stars and scriptures of the soul. In this full moon gathering, we will " +
      "explore the Hermetica—texts of deep insight, where mystics meet mystery. Bring your " +
      "curiosity, your questions, your readiness to touch something eternal.",
  },
  {
    name: 'Perseid Meteor Shower Viewing Ceremony',
    time: 'Tuesday, August 12, 2025 • 11PM-Midnight',
    text:
      "The sky becomes a cathedral of fire and motion—an invitation written in meteors. Come " +
      "enter the standing stone circle to the beat of drums until we enter silence to witness the " +
      "Perseids Meteor Shower in sacred stillness, lying beneath the arc of the universe. What " +
      "falls is not just dust and light, but longing and possibility. Bring a blanket, a wish, and a " +
      "wide-open heart.",
  },
  {
    name: 'The Hermetica Morning Class',
    time: 'Saturday, August 23, 2025. 7AM-8AM',
    text:
      "We enter the standing stone circle to explore the Hermetica—texts of deep insight, " +
      "where mystics meet mystery. Bring your curiosity, your questions, your readiness to " +
      "touch something eternal.",
  },
  {
    name: 'Full Moon Healing Ceremony',
    time: 'Monday, September 8, 2025 • 8PM-9PM',
    text:
      "Under the full moon's wise light. A ceremony of illumination, where timeless medicine " +
      "meets night sky silence. The standing stone circle invites you to this night of healing for " +
      "your body, mind, and spirit. " +
      "In a world that rushes, this is the hour to rest, reset, and receive. Join the healing circle " +
      "under moon and stars as we call upon ancient wisdom, breath, and intention to realign " +
      "body, mind, and spirit. The stones will hold you; the night will cleanse you. Come home " +
      "to yourself.",
  },
  {
    name: 'Morning Healing Ceremony',
    time: 'Wednesday, September 17, 2025 • 8AM-9AM',
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
    name: 'Fear to Freedom: A Path through Nature',
    time: 'Saturday, September 20, 2025 • 1PM-3PM',
    text:
      "Led by Jane Baird Tinkler, Certified Nature Therapist. " +
      "Learn about the Elemental Courage that helps us find the stillness beneath the fear during these uncertain times. Experience calm among the stones and sky.",
  },
  {
    name: 'Autumn Equinox Ceremony: Balance of Day and Night',
    time: 'Monday, September 22, 2025 • 7PM-8PM',
    text:
      "This is the moment Earth pauses. Light and darkness hold hands across the horizon. " +
      "Join us at the Standing Stone Circle for an equinox ceremony of sacred balance, " +
      "gratitude, and letting go. What will you release? What will you harvest? Bring yourself " +
      "just as you are—on this holy hinge between seasons.",
  },
];

export default function StoneCircle() {

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
        {upcomingEvents.map((event, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index} sx={{ display: 'flex' }}>
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
                {event.time}
              </Typography>
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.secondary' }}
                >
                  {event.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Book Your Own Events
        </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Family photos | Graduation photos | Private events | Weddings | Baby Blessings | Anniversaries | Memorials | Birthdays
      </Typography>
    </Container>
  );
}

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';
import StreamIcon from '@mui/icons-material/Stream';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function TopBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ width: '100%', display: 'flex', }}  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
              <StreamIcon color='primary' sx={{ margin: '4px 6px 0 0' }}/>
              <Typography color='primary' variant='h6'>
                Standing Stone Circle
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '5px' }}>
              <Button variant="text" color="info" size="small"  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} sx={{ marginRight: '5px' }}>
                <Typography color='textPrimary' variant='h7'>
                  About
                </Typography>
              </Button>
              <Button variant="text" color="info" size="small"  onClick={() => document.getElementById('inspiration')?.scrollIntoView({ behavior: 'smooth' })} sx={{ marginRight: '5px' }}>
                <Typography color='textPrimary' variant='h7'>
                  Inspiration
                </Typography>
              </Button>
              <Button variant="text" color="info" size="small"  onClick={() => document.getElementById('stoneCircle')?.scrollIntoView({ behavior: 'smooth' })} sx={{ marginRight: '5px' }}>
                <Typography color='textPrimary' variant='h7'>
                  Standing&nbsp;Stones
                </Typography>
              </Button>
              <Button variant="text" color="info" size="small"  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} sx={{ marginRight: '5px' }}>
                <Typography color='textPrimary' variant='h7'>
                  Services
                </Typography>
              </Button>
              <Button variant="text" color="info" size="small"  onClick={() => document.getElementById('activeSessions')?.scrollIntoView({ behavior: 'smooth' })} sx={{ marginRight: '5px' }}>
                <Typography color='textPrimary' variant='h7'>
                  Upcoming&nbsp;Sessions
                </Typography>
              </Button>
              <Button variant="text" color="info" size="small"  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} sx={{ minWidth: 0 }}>
                <Typography color='textPrimary' variant='h7'>
                  Contact
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              paper={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem onClick={() => {document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false);}}>About</MenuItem>
                <MenuItem onClick={() => {document.getElementById('inspiration')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false);}}>Inspiration</MenuItem>
                <MenuItem onClick={() => {document.getElementById('stoneCircle')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false);}}>Stone&nbsp;Circle</MenuItem>
                <MenuItem onClick={() => {document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false);}}>Services</MenuItem>
                <MenuItem onClick={() => {document.getElementById('activeSessions')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false);}}>Upcoming&nbsp;Sessions</MenuItem>
                <MenuItem onClick={() => {document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false);}}>Contact</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

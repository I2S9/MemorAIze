'use client';

import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/globals.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Aptos Black, sans-serif',
    h2: {
      fontFamily: 'Porkys, sans-serif',
      fontSize: '9.5rem',
    },
    h5: {
      fontSize: '5rem',
      color: '#E54792',
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      main: '#0F9ED5',
    },
    background: {
      default: '#E5F4FB',
    },
  },
  shape: {
    borderRadius: 2,
  },
});

export default function Home() {
  const router = useRouter();

  // Go back to home
  const handleHomeClick = () => {
    router.push('/');
  };

  // Go to generate page
  const getStarted = async () => {
    router.push('/generate');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="100vw" sx={{ backgroundColor: '#E5F4FB', height: '100vh', p: 0 }}>
        <Head>
          <title>Memoraize</title>
          <meta name="description" content="Create flashcard from your text" />
          {/* For MM icon */}
          <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><text x='8' y='48' font-family='Porkys' font-size='48' fill='%230F9ED5'>M</text><text x='32' y='48' font-family='Porkys' font-size='48' fill='%23E54792'>M</text></svg>" />
        </Head>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            {/* MM Button at the top */}
            <Button
              onClick={handleHomeClick}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                mt: 2,
                ml: 2,
                padding: 0,
                minWidth: 'auto',
                height: 'auto',
                fontFamily: "Porkys, sans-serif",
                fontSize: '2.5rem',
                textTransform: 'none',
                color: '#0F9ED5',
                ':after': {
                  content: '"M"',
                  display: 'inline-block',
                  fontFamily: 'Porkys, sans-serif',
                  fontSize: '2.5rem',
                  color: '#0F9ED5',
                  marginRight: '-0.5rem',
                },
                ':before': {
                  content: '"M"',
                  display: 'inline-block',
                  fontFamily: 'Porkys, sans-serif',
                  fontSize: '2.5rem',
                  color: '#E54792',
                }
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <SignedOut>
              <Button color="primary" variant="contained" href="/sign-in" sx={{ color: 'white', fontWeight: 'bold', borderRadius: 5 }}>
                Log In
              </Button>
              <Button color="primary" variant="contained" href="/sign-up" sx={{ color: 'white', fontWeight: 'bold', borderRadius: 5, ml: 2 }}>
                Sign Up
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            textAlign: 'center',
            my: 4,
            backgroundColor: '#E5F4FB',
          }}
        >
          <Typography variant="h2" gutterBottom>
            <span style={{ color: '#E54792' }}>Memor</span>
            <span style={{ color: '#0F9ED5' }}>ai</span>
            <span style={{ color: '#E54792' }}>ze</span>
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ 
              color: '#0F9ED5', 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              mt: -8,
              mb: 2 
            }} 
          >
            Smart Learning, Effortless Memorizing!
          </Typography>
          <Button onClick={getStarted} variant="contained" sx={{ mt: 2, backgroundColor: '#E54792', fontWeight: 'bold', borderRadius: 5 }}>
            Get Started
          </Button>
        </Box>

        <Box sx={{ my: 10, p: 4, backgroundColor: '#0F9ED5', borderRadius: 5, px: 4 }}>
          <Typography textAlign="center" variant="h4" gutterBottom sx={{ color: 'white', fontWeight: 'bold', mb: 3 }}>
            Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={2} sx={{ px: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  <strong>Flashcard Organization</strong>
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
                  Intuitive structure for users to manage their flashcards.
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Search bar to quickly find specific flashcards or sets. Enable categorization and tagging of flashcards for better organization.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ px: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  <strong>AI-Powered Learning</strong>
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
                  Implement AI-driven adaptive learning to enhance memorization.
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Use AI to track user performance and adjust the frequency of flashcard appearances. Implement spaced repetition algorithms to optimize learning schedules.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ px: 1, display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  <strong>Calendar Integration</strong>
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
                  Sync calendar events with flashcard revision notifications.
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Integrate a calendar feature for scheduling study sessions and setting reminders.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ px: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  <strong>Analytics Dashboard</strong>
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
                  Provide users with insights into their learning progress.
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Design a dashboard that displays key metrics such as time spent studying, quiz scores, and mastery levels. Include visual aids like graphs and charts to illustrate progress trends.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ px: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                  <strong>Multimedia Support</strong>
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 1 }}>
                  Enhance the learning experience by supporting various media types.
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Enable users to upload and incorporate videos, PDFs, and audio into flashcards.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
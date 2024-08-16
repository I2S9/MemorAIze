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
      fontSize: '8.5rem',
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
              mt: -3,
              mb: 2 
            }} 
          >
            Smart Learning, Effortless Memorizing!
          </Typography>
          <Button onClick={getStarted} variant="contained" sx={{ mt: 2, backgroundColor: '#E54792', fontWeight: 'bold', borderRadius: 5 }}>
            Get Started
          </Button>
        </Box>

        <Box sx={{ my: 6, p: 4, backgroundColor: '#0F9ED5', borderRadius: 5 }}>
          <Typography textAlign="center" variant="h4" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>1. XXXXXX</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>2. XXXXXX</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>3. XXXXXX</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>4. XXXXXX</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>5. XXXXXX</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

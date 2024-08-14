import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Head from 'next/head';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>MemorAIze</title>
        <meta name="description" content = "Create flashcard from your text"/>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>MemorAIze</Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          textAlign: 'center',
          my: 4
        }}
      >
        <Typography variant = "h2" gutterBottom>Welcome to MemorAIze</Typography>
        <Typography variant = "h5" gutterBottom>
          { ' '}
          Smart Learning, Effortless Memorizing!
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>
          Get Started
        </Button>        
      </Box>
      <Box sx= {{my: 6}}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anywhere</Typography>
            <Typography>
              {' '}
              Access your flashcards from any device, at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" components="h2" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h5">Basic</Typography>
            <Typography variant="h6">$5/ Month</Typography>
            <Typography>
              {' '}
              Access to basic flashcard features and limited storage.
            </Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}}>
              Choose Basic
            </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box sx={{
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
            }}>
            <Typography variant="h5">Pro</Typography>
            <Typography variant="h6">$10/ Month</Typography>
            <Typography>
              {' '}
              Unlimited flashcards and storage, with priority support.
            </Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}}>
              Choose Pro
            </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

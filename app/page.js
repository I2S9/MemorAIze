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
        <Typography variant = "h2">Welcome to MemorAIze</Typography>
        <Typography variant = "h5">
          { ' '}
          Smart Learning, Effortless Memorizing!
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>
          Get Started
        </Button>        
      </Box>
      <Box sx= {{my: 6}}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input your text and let our software do the rest. Creating flashcards has never been easier.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flashcards</Typography>
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
    </Container>
  );
}

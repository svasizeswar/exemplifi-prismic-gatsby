import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Link from '../components/Link';
import ProTip from '../components/ProTip';
import Navbar from '../components/Navbar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI.
      </MuiLink>
    </Typography>
  );
}

export default function App() {
  return (
   
    <Container maxWidth="lg">
       <Navbar/> 
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby React Material UI
        </Typography>
        
        <Button variant="contained" color="primary"   to="/">
       Home Page
      </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar(){
    return (
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Yelpcamp
            </Typography>
            <Button color="inherit" href="/">
              Home
            </Button>
            <Button color="inherit" href="/campgrounds">
              Campgrounds
            </Button>
            <Button color="inherit" href="/campgrounds/new">
              New Campground
            </Button>
            {/* Add your conditional rendering here */}
            {/* Example: */}
            { !currentUser ?
              <>
                <Button color="inherit" href="/login">
                  Login
                </Button>
                <Button color="inherit" href="/register">
                  Sign Up
                </Button>
              </>
              :
              <>
                <Button color="inherit">
                  {currentUser.username[0].toUpperCase() + currentUser.username.substring(1)}
                </Button>
                <Button color="inherit" href="/logout">
                  Logout
                </Button>
              </>
            }
          </Toolbar>
        </AppBar>
      );
}
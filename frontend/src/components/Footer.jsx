import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme.js";

export default function Footer() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0}} 
      >
        <Container >
          <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body1" color="inherit">
              &copy; Yelpcamp 2023 | Pradeesh Karunakaran
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

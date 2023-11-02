import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme.js";
import {Link} from 'react-router-dom'

const pages = [["Home", "Home page","/"], ["Campgrounds", "browse campgrounds","/campgrounds"], ["New Campground","Add a new campground","/campgrounds/new"]];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#1976d2",
  //     },
  //   },
  // });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl" style={{ maxWidth: 1920 }}>
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              YelpCamp
            </Typography>

            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem  key={page[0]} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page[0]}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              YelpCamp
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Link key={page[0]} to={page[2]} style={{textDecoration:"none"}}>
               <Tooltip title={page[1]}>
                  <Button
                    key={page[0]}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page[0]}
                  </Button>
               </Tooltip>
               </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const CustomNavbar = ({ currentUser }) => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand href="#">Yelpcamp</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
//       <Navbar.Collapse id="navbarNavAltMarkup">
//         <Nav className="mr-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//           <Nav.Link href="/campgrounds">Campgrounds</Nav.Link>
//           <Nav.Link href="/campgrounds/new">New Campground</Nav.Link>
//         </Nav>
//         <Nav className="navbar-nav navbar-right">
//           {!currentUser ? (
//             <>
//               <Nav.Link className="mr-sm-2" href="/login">
//                 Login
//               </Nav.Link>
//               <Nav.Link className="mr-sm-2" href="/register">
//                 Sign Up
//               </Nav.Link>
//             </>
//           ) : (
//             <>
//               <Nav.Link className="mr-sm-2">
//                 {currentUser.username[0].toUpperCase() +
//                   currentUser.username.substring(1)}
//               </Nav.Link>
//               <Nav.Link className="mr-sm-2" href="/logout">
//                 Logout
//               </Nav.Link>
//             </>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default CustomNavbar;

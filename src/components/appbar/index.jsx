import * as React from "react";
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
import woman from "../../assets/images/inoyatov.png";
import logo1 from "../../assets/logo.png";
import Router from "../../router/router";
import { NavLink } from "react-router-dom";
import "../../router/const";

import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  TASKS_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  METHOD_PAGE,
  LABORATORY_PAGE,
} from "../../router/const";

const pages = [
  { id: 1, name: "Ma'ruza", path: PRESENTATION_PAGE },
  { id: 2, name: "Topshiriq", path: TASKS_PAGE },
  { id: 3, name: "Metodika", path: METHOD_PAGE },
  { id: 4, name: "Laboratoriya", path: LABORATORY_PAGE },
  { id: 5, name: "Test", path: TEST_PAGE },
];
const settings = [
  { id: 1, name: "Muallif haqida", path: AUTHOR_PAGE },
  { id: 2, name: "Dastur haqida", path: ABOUT_PAGE },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  return (
    <div>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink
              className="flex items-center justify-center"
              to={HOME_PAGE}
            >
              <Typography
                variant="h6"
                noWrap
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
                <img className="h-[50px]" src={logo1} alt="" />
              </Typography>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  <NavLink sx={{}} to={page.path} key={page.id}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        sx={{
                          color: "#00337C",
                          fontWeight: "semibold",
                        }}
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 900,
                letterSpacing: ".3rem",
                // color: "inherit",
                textDecoration: "none",
              }}
            >
              <img className="h-[50px]" src={logo1} alt="" />

              {/* {nameOfScinece} */}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <NavLink to={page.path} key={page.id}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={woman} />
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
                  <NavLink key={setting.id} to={setting.path}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography
                        sx={{
                          color: "#00337C",
                          fontWeight: "semibold",
                        }}
                        textAlign="center"
                      >
                        {setting.name}
                      </Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Router />
      </Container>
    </div>
  );
}
export default ResponsiveAppBar;

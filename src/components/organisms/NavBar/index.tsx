import Logo from "../../molecules/Logo";
import Icon from "../../Atoms/Icon";
import { Box, Menu, MenuItem, Container, ThemeProvider } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Theme from "../../Theme";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "../../Atoms/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import AvatarComp from "../../Atoms/Avatar";
import { useAuth0 } from "@auth0/auth0-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const HeaderComponent = (props: any) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const link = `${isAuthenticated ? "/library" : "/"}`;

  console.log("isAuthenticated? " + isAuthenticated);

  return (
    <ThemeProvider theme={Theme}>
      <AppBar
        position="fixed"
        sx={{
          color: "black",
          backgroundColor: "white",
          boxShadow: "none",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <Container>
          <Toolbar
            sx={{
              height: "86px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Logo {...props} />
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                size="large"
                key={1}
                startIcon={<Search />}
                sx={{ color: "#03314B", margin: "0px 5px 0px 40px" }}
              />

              <Button
                onClick={props.handleExploreMenu}
                size="medium"
                key={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#03314B",
                  margin: "5px 10px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
                children="Explore"
                endIcon={
                  !props.exploreOption ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )
                }
              />
              <NavLink to={link} style={{ textDecoration: "none" }}>
                <Button
                  size="medium"
                  key={2}
                  children="My Library"
                  sx={{
                    color: "#03314B",
                    margin: "5px 10px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                />
              </NavLink>
            </Box>
            <Box sx={{ flexGrow: 0.5 }}>
              <div style={{ alignItems: "center", display: "flex" }}>
                <Button onClick={handleOpenUserMenu}>
                  {!isAuthenticated ? (
                    <AvatarComp />
                  ) : (
                    <AvatarComp>{"A"}</AvatarComp>
                  )}
                </Button>
                <Icon icon={<KeyboardArrowDownIcon />} />
              </div>

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
                {!isAuthenticated ? (
                  <MenuItem>
                    <Button
                      sx={{ color: "black" }}
                      onClick={() => {
                        return loginWithRedirect();
                      }}
                    >
                      {" "}
                      Login
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Button
                      sx={{ color: "black" }}
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                    >
                      {" "}
                      Log Out
                    </Button>
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default HeaderComponent;

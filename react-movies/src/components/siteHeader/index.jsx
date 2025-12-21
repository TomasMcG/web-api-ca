import React, { useState,useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { AuthContext } from "../../contexts/authContext";



const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const navigate = useNavigate();
  const context = useContext(AuthContext);

    const toggleDrawer = (open) => () => {setDrawerOpen(open); };
    const [drawerOpen, setDrawerOpen] = useState(false);
 






  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Trending", path: "/movies/trending" },
    { label: "Now Playing", path: "/movies/now-playing" },
    { label: "Top Rated", path: "/movies/top-rated" },
    { label: "User Reviews", path: "/movies/userReviews" }

  ];

  const loginMenuOptions = [{ label: "Login", path: "/movies/login" },
    { label: "Sign Up", path: "/movies/signUp" }]

const loggedInMenuOption = [{ label: "Favorites", path: "/movies/favorites" },
    { label: "Playlist", path: "/movies/playlist" },{ label: "Logout", path: "/movies/logout" }]

   {context.isAuthenticated ? (
          menuOptions.push(...loggedInMenuOption)
        ) : (
          menuOptions.push(...loginMenuOptions)
        )}


  const handleMenuSelect = (pageURL) => {
    setAnchorEl(null);
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

    const DrawerList = (
    <List sx={{ width: 250 }}>
      {menuOptions.map((option) => (
        <ListItem key={option.label} disablePadding>
          <ListItemButton onClick={() => handleMenuSelect(option.path)}>
            <ListItemText primary={option.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

 let headerText = "Discover new and upcoming movies"
  {context.isAuthenticated ?(headerText = "Hello:" + context.userName):(<></>)}

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#0b5e19ff"}}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {headerText}
          </Typography>
            {isMobile ? (
              <>
                <IconButton
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu 
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                  
                >
                  {menuOptions.map((opt) => (
                    <MenuItem 
                      key={opt.label}
                      onClick={() => handleMenuSelect(opt.path)}
                      
                    >
                      {opt.label}
                    </MenuItem>
                  ))}
                  
                </Menu>
              </>
            ) : (
              <>
                {menuOptions.map((opt) => 
                  (
                 
                  
                  <Button
                  
                    key={opt.label}
                    color= "transparent"
                    sx={{color: "#ffda8aff",  }}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Button>
                ))}

                 <IconButton
            color="inherit"
            edge="end"
            sx={{ ml: 1 }}
            onClick={toggleDrawer(true)}
          > </IconButton>
        
            <MenuIcon />
            {context.isAuthenticated ?(<Button 
  onClick={() => context.signout()}
  sx={{ color: "#ffffffff" }}
>
  Sign Out
</Button>):(<></>)}
            
        
          

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {DrawerList}
          </Drawer>
          
              </>
            )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;

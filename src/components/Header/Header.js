import React, { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GlobalInfo } from "../../App";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from '@mui/icons-material/Info';
import Drawer from '@mui/material/Drawer';
import CategoryIcon from '@mui/icons-material/Category';
import List from '@mui/material/List';
import ArticleIcon from '@mui/icons-material/Article';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
  const { cartList } = useContext(GlobalInfo);
  const [isHovering, setIsHovering] = useState(false);
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <List>
        {[
          { text: 'Home', link: '/',icon:<HomeIcon/> },
          { text: 'About', link: '/about',icon:<InfoIcon /> },
          { text: 'Products', link: '/products',icon:<CategoryIcon/> },
          { text: 'Posts', link: '/posts',icon:<ArticleIcon/> },
          {text:"Cart",link:'/cart',icon:<ShoppingCartIcon/>}
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText>
              <NavLink
              to={item.link}
              className={(navData) =>
                navData.isActive ? "nav-link-active" : "nav-link"
              }
            >
              {item.text}
            </NavLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <header>
      <div className="header-container fixed-top">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="logo">E-Com</div>
          <div className="links-container d-flex justify-content-between align-items-center">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "nav-link-active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? "nav-link-active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={(navData) =>
                navData.isActive ? "nav-link-active" : "nav-link"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/posts"
              className={(navData) =>
                navData.isActive ? "nav-link-active" : "nav-link"
              }
            >
              Posts
            </NavLink>
            <NavLink
              to="/cart"
              className={(navData) =>
                navData.isActive ? "nav-link-active cart" : "nav-link"
              }
              style={{
                color: isHovering ? "orange" : "white",
                textDecoration: "none",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ShoppingCartIcon style={{ fontSize: "30px" }} />
              <span style={{ color: "red", fontSize: "18px" }}>
                {cartList.length}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="header-mobileview-container">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                 <div>
      <Button onClick={toggleDrawer('left', true)} style={{color:"white"}}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                E-Com
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </header>
  );
};

export default Header;

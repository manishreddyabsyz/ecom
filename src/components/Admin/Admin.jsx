import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutIcon from "@mui/icons-material/Logout";
import ClearIcon from "@mui/icons-material/Clear";
import "./Admin.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ProductTable from "../ProductTable/ProductTable";
import { TextField } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "spacearound",
  m: 0,
};


const drawerWidth = 240;
const rows = [
  {
    id: 1,

    name: "Bluetooth & Wireless Over-Ear Headphones (Black)",
    price: 12,
    image: require("../../images/1.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 2,

    name: "Apple iPhone 128GB",
    price: 14,
    image: require("../../images/2.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 3,

    name: "Running Shoe Red & White",
    price: 16.89,
    image: require("../../images/3.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 4,

    name: "Apple iPhone Blue 64GB",
    price: 47.67,
    image: require("../../images/4.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 5,

    name: "Bluetooth Over-Ear Headphones (White)",
    price: 53.06,
    image: require("../../images/5.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 6,
    quantity: 1,
    name: "Logitech Gamepad White for PC/PS3",
    price: 93.2,
    image: require("../../images/6.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 7,

    name: "Premium Smart Watch (Black)",
    price: 25,
    image: require("../../images/7.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 8,

    name: "Multicolor Modern Shoe for Her",
    price: 99.28,
    image: require("../../images/8.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 9,
    name: "Apple iPhone (Brand New)",
    price: 87.22,
    image: require("../../images/9.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 10,
    name: "Smart Watch with Latest Android OS",
    price: 11,
    image: require("../../images/10.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 11,
    name: "Modern & Original Eye Glasses",
    price: 69,
    image: require("../../images/11.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 12,
    name: "Nikon Camera (Slightly Used) 750",
    price: 29,
    image: require("../../images/12.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 13,
    name: "Red & Black Ganming Mouse for PC",
    price: 99,
    image: require("../../images/13.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 14,
    name: "Multi Purpose College Bag Backpack",
    price: 44,
    image: require("../../images/14.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
  {
    id: 15,
    name: "White & Black Watch Concept",
    price: 22.22,
    image: require("../../images/15.jpg"),
    details:
      "Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.",
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [sendItems, setSendItems] = React.useState(rows);
  const [errors, setErrors] = React.useState({});
  const [items, setItems] = React.useState({
    id: "",
    name: "",
    details: "",
    price: "",
    image:""
  });
  const newErrors = {};
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.removeItem("signupdata");
    window.location.reload(false);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const changeHandler = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const validationForm = () => {
    if (!items.name) {
      newErrors.name = "Product name is required";
    }
    if (!items.details) {
      newErrors.details = "Product description is required";
    }
    if (!items.price) {
      newErrors.price = "Product price is required";
    } else if (isNaN(items.price)) {
      newErrors.price = "Product must be number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (validationForm()) {
      const newItems = { ...items, id: sendItems.length + 1 };
      const updatedSendItems = [...sendItems, newItems];
      setSendItems(updatedSendItems);
      setItems({
        name: "",
        details: "",
        price: "",
      });
     
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ADMIN
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <NavLink
                  to="/admin"
                  className={(navData) =>
                    navData.isActive ? "nav-link-active" : "nav-link"
                  }
                >
                  <CategoryIcon />
                </NavLink>
              </ListItemIcon>
              <ListItemText primary="Products" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <IconButton onClick={logout}>
                  <LogoutIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div className="add-btn">
          <Button onClick={handleOpen} variant="contained">
            Add
          </Button>
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1>Add Product Details</h1>

                <button
                  onClick={handleClose}
                  style={{ backgroundColor: "transparent", border: "0" }}
                >
                  <ClearIcon style={{ fontSize: "40px" }} />
                </button>
              </div>
              <form autoComplete="off" className="form-container-addproduct">
                <div>
                  <label>Product Name:</label>
                  <TextField
                    id="outlined-required"
                    type="text"
                    label="Enter Product Name"
                    helperText={errors.name}
                    error={Boolean(errors.name)}
                    onChange={changeHandler}
                    className="product-input"
                    name="name"
                    value={items.name}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <label>Product Description: </label>
                  <TextField
                    type="text"
                    label="Enter Product Description"
                    onChange={changeHandler}
                    helperText={errors.details}
                    error={Boolean(errors.details)}
                    className="product-input"
                    name="details"
                    value={items.details}
                  />
                </div>
                <div>
                  <label>Product Price:</label>
                  <TextField
                    type="text"
                    label="Enter Product Price"
                    onChange={changeHandler}
                    helperText={errors.price}
                    error={Boolean(errors.price)}
                    className="product-input"
                    name="price"
                    value={items.price}
                  />
                </div>
               
                <div style={{marginBottom:"10px"}}>
                  <TextField type="file"
                  onChange={changeHandler}
                  name="image"
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <button className="btn btn-secondary" onClick={handleClose}>
                    Cancel
                  </button>
                  <Button
                    onClick={addHandler}
                    variant="contained"
                    sx={{ marginLeft: "51%" }}
                  >
                    Add
                  </Button>
                </div>
              </form>
            </Box>
          </Modal>
        </div>
        <div className="container content">
          <ProductTable addItems={sendItems} setSendItems={setSendItems} />
        </div>
      </Box>
    </Box>
  );
}

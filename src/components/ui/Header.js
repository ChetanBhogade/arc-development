import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const MyComponent = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em",
}));

const MyImg = styled("img")({
  height: "8em",
});

const MyTabs = styled(Tabs)({
  marginLeft: "auto",
});

const MyTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
  color: "#ffffff",
}));

const MyButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  height: "45px",
}));
const LogoContainer = styled(Button)(({ theme }) => ({
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const MyMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    backgroundColor: theme.palette.common.arcBlue,
    color: "white",
    borderRadius: 0,
  },
}));
const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.tab,
  opacity: 0.7,
  ":hover": {
    opacity: 1,
  },
  backgroundColor: "inherit",
  "&.Mui-selected": {
    backgroundColor: "#0e3d5e40",
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/custom-software" },
    { name: "Mobile App Development", link: "/mobile-apps" },
    { name: "Website Development", link: "/websites" },
  ];

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/custom-software":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobile-apps":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(2);
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
        break;
      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
        break;

      default:
        break;
    }
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <LogoContainer
              onClick={() => setValue(0)}
              disableRipple
              LinkComponent={Link}
              to="/"
            >
              <MyImg src={logo} alt="Company Logo" />
            </LogoContainer>
            <MyTabs value={value} onChange={handleChange} textColor="inherit">
              <MyTab LinkComponent={Link} to="/" label="Home" />
              <MyTab
                aria-haspopup={anchorEl ? true : undefined}
                aria-owns={anchorEl ? "simple-menu" : undefined}
                onMouseOver={(event) => handleClick(event)}
                label="Services"
              />
              <MyTab
                LinkComponent={Link}
                to="/revolution"
                label="The Revolution"
              />
              <MyTab LinkComponent={Link} to="/about" label="About Us" />
              <MyTab LinkComponent={Link} to="/contact" label="Contact Us" />
            </MyTabs>
            <MyButton
              LinkComponent={Link}
              to="/estimate"
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </MyButton>
            <MyMenu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, index) => (
                <MyMenuItem
                  key={index}
                  onClick={(event) => {
                    handleMenuItemClick(event, index);
                    setValue(1);
                    handleClose();
                  }}
                  selected={index === selectedIndex && value === 1}
                >
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to={option.link}
                  >
                    {option.name}
                  </Link>
                </MyMenuItem>
              ))}
            </MyMenu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <MyComponent />
    </>
  );
}

export default Header;

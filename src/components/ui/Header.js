import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
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
    backgroundColor: "transparent"
  }
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

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
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
              <MyTab LinkComponent={Link} to="/services" label="Services" />
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <MyComponent />
    </>
  );
}

export default Header;

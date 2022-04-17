import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import ButtonArrow from "./ui/ButtonArrow";

const StyledBackground = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "60em",
  paddingBottom: "10em",
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${mobileBackground})`,
  },
}));

const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: 50,
  height: 80,
  width: 205,
  backgroundColor: theme.palette.common.arcOrange,
  fontSize: "1.5rem",
  marginRight: "5em",
  marginLeft: "2em",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));
const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  height: 35,
  padding: 5,
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
}));

const StyledMessage = styled(TextField)(({ theme }) => ({
  border: `2px solid ${theme.palette.common.arcBlue}`,
  marginTop: "5em",
  borderRadius: 5,
}));
const SendButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: 50,
  height: 45,
  width: 245,
  fontSize: "1rem",
  backgroundColor: theme.palette.common.arcOrange,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

function Contact(props) {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.arcBlue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.arcBlue,
                    fontSize: "1rem",
                  }}
                >
                  (555) 555-5555
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.arcBlue,
                    fontSize: "1rem",
                  }}
                >
                  chetan.bhogade3899@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  variant="standard"
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  variant="standard"
                  label="Email"
                  id="email"
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  variant="standard"
                  label="Phone"
                  id="phone"
                  fullWidth
                  phone={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <StyledMessage
                inputProps={{
                  // disableUnderline: "true",
                  underline: {
                    "&&&:before": {
                      borderBottom: "none",
                    },
                    "&&:after": {
                      borderBottom: "none",
                    },
                  },
                }}
                multiline
                fullWidth
                rows={10}
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <SendButton variant="contained">
                Send Message
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </SendButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <StyledBackground
        item
        container
        lg={8}
        xl={9}
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justifyContent={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                Take advantage of 21st Century.
              </Typography>
              <Grid
                container
                item
                justifyContent={matchesMD ? "center" : undefined}
              >
                <LearnButton
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  onClick={() => {
                    setValue(2);
                  }}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.arcBlue}
                  />
                </LearnButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <EstimateButton
            component={Link}
            to="/estimate"
            variant="contained"
            onClick={() => setValue(5)}
          >
            Free Estimate
          </EstimateButton>
        </Grid>
      </StyledBackground>
    </Grid>
  );
}

export default Contact;
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";

import customSoftwareData from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const ServiceContainer = styled(Grid)(({ theme }) => ({
  marginTop: "10em",
  [theme.breakpoints.down("sm")]: {
    padding: 25,
  },
}));
const IconImg = styled("img")(({ theme }) => ({
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));
const StyledSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1em",
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
const SpecialText = styled("span")(({ theme }) => ({
  fontFamily: "Pacifico",
  color: theme.palette.common.arcOrange,
}));

function Services(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const { setValue, setSelectedIndex } = props;

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesMD ? 0 : "5em",
          marginTop: matchesMD ? "1em" : "2em",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          alignItems={matchesMD ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* -----iOS/Android Block----- */}
        <ServiceContainer
          justifyContent={matchesMD ? "center" : "flex-end"}
          container
          direction="row"
          style={{ marginTop: matchesMD ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesMD ? "center" : undefined,
              width: matchesMD ? undefined : "35em",
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <StyledSubtitle variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement.
            </StyledSubtitle>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesMD ? null : <br />} with either mobile platform
            </Typography>
            <LearnButton
              component={Link}
              to="/mobile-apps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              variant="outlined"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </LearnButton>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchesMD ? 0 : "5em",
            }}
          >
            <IconImg
              alt="Mobile phone icon"
              src={mobileAppsIcon}
              width="250em"
            />
          </Grid>
        </ServiceContainer>
      </Grid>
      <Grid item>
        {/* -----Custom Software Block----- */}
        <ServiceContainer
          justifyContent={matchesMD ? "center" : undefined}
          container
          direction="row"
        >
          <Grid
            item
            style={{
              marginLeft: matchesMD ? 0 : "5em",
              textAlign: matchesMD ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <StyledSubtitle variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </StyledSubtitle>
            <Typography variant="subtitle1">
              Complete digital solution, from investigation to{" "}
              <SpecialText>celebration.</SpecialText>
            </Typography>
            <LearnButton
              component={Link}
              to="/custom-software"
              variant="outlined"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </LearnButton>
          </Grid>
          <Grid item>
            <IconImg alt="Custom software icon" src={customSoftwareData} />
          </Grid>
        </ServiceContainer>
      </Grid>
      <Grid item>
        {/* -----Website Block----- */}
        <ServiceContainer
          justifyContent={matchesMD ? "center" : "flex-end"}
          container
          direction="row"
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesMD ? "center" : undefined,
              width: matchesMD ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <StyledSubtitle variant="subtitle1">
              Reach More. Discover More. Sell More.
            </StyledSubtitle>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <LearnButton
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              variant="outlined"
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </LearnButton>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchesMD ? 0 : "5em",
            }}
          >
            <IconImg alt="Website icon" src={websitesIcon} width="250em" />
          </Grid>
        </ServiceContainer>
      </Grid>
    </Grid>
  );
}

export default Services;

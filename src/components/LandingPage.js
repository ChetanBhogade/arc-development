import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React from "react";
import Lottie from "react-lottie";
import ButtonArrow from "./ui/ButtonArrow";

import animationData from "../animations/landinganimation/data";
import customSoftwareData from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const StyledAnimation = styled(Grid)(({ theme }) => ({
  maxWidth: "50em",
  minWidth: "21em",
  marginTop: "2em",
  marginLeft: "10%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "30em",
  },
}));

const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  backgroundColor: theme.palette.common.arcOrange,
  borderRadius: 50,
  height: 45,
  width: 145,
  marginRight: 40,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  marginTop: "1em",
}));
const LearnButtonHero = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.9rem",
  height: 45,
  width: 145,
}));
const HeroTextContainer = styled(Grid)(({ theme }) => ({
  minWidth: "21.5em",
  marginLeft: "1em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0em",
  },
}));

const MainContainer = styled(Grid)(({ theme }) => ({
  marginTop: "5em",
  [theme.breakpoints.down("md")]: {
    marginTop: "3em",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "2em",
  },
}));

const SpecialText = styled("span")(({ theme }) => ({
  fontFamily: "Pacifico",
  color: theme.palette.common.arcOrange,
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
const StyledSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1em",
}));

const IconImg = styled("img")(({ theme }) => ({
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

const ServiceContainer = styled(Grid)(({ theme }) => ({
  marginTop: "12em",
  [theme.breakpoints.down("sm")]: {
    padding: 25,
  },
}));

function LandingPage() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <MainContainer container direction="column">
      <Grid item>
        {/* -----Hero Block----- */}
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <HeroTextContainer item sm>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <ButtonContainer container justifyContent={"center"}>
              <Grid item>
                <EstimateButton variant="contained">
                  Free Estimate
                </EstimateButton>
              </Grid>
              <Grid item>
                <LearnButtonHero variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  />
                </LearnButtonHero>
              </Grid>
            </ButtonContainer>
          </HeroTextContainer>
          <StyledAnimation item sm>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </StyledAnimation>
        </Grid>
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
            <LearnButton variant="outlined">
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
        {/* -----iOS/Android Block----- */}
        <ServiceContainer
          justifyContent={matchesMD ? "center" : "flex-end"}
          container
          direction="row"
        >
          <Grid
            item
            style={{
              textAlign: matchesMD ? "center" : undefined,
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
            <LearnButton variant="outlined">
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
            <IconImg alt="Mobile phone icon" src={mobileAppsIcon} />
          </Grid>
        </ServiceContainer>
      </Grid>
      <Grid item>
        {/* -----Website Block----- */}
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
            <Typography variant="h4">Website Development</Typography>
            <StyledSubtitle variant="subtitle1">
              Reach More. Discover More. Sell More.
            </StyledSubtitle>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <LearnButton variant="outlined">
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </LearnButton>
          </Grid>
          <Grid item>
            <IconImg alt="Website icon" src={websitesIcon} />
          </Grid>
        </ServiceContainer>
      </Grid>
    </MainContainer>
  );
}

export default LandingPage;

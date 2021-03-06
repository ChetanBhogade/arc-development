import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import ButtonArrow from "./ui/ButtonArrow";
import CallToAction from "./ui/CallToAction";

import animationData from "../animations/landinganimation/data";
import customSoftwareData from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

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

const RevolutionBackground = styled("div")(({ theme }) => ({
  backgroundImage: `url(${revolutionBackground})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
}));
const RevolutionCard = styled(Card)(({ theme }) => ({
  position: "absolute",
  boxShadow: theme.shadows[10],
  borderRadius: 15,
  padding: "10em",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "8em",
    paddingBottom: "8em",
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 0,
    width: "100%",
  },
}));

const InfoBackground = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${infoBackground})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
}));

function LandingPage(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { setValue, setSelectedIndex } = props;

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
                <EstimateButton
                  component={Link}
                  to="/estimate"
                  variant="contained"
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </EstimateButton>
              </Grid>
              <Grid item>
                <LearnButtonHero
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  onClick={() => setValue(2)}
                >
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
          <Grid item>
            <IconImg alt="Website icon" src={websitesIcon} />
          </Grid>
        </ServiceContainer>
      </Grid>
      <Grid item>
        {/* -----Revolution Block----- */}
        <Grid
          style={{ height: "100em", marginTop: "12em" }}
          container
          alignItems="center"
          justifyContent="center"
        >
          <RevolutionCard>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <LearnButtonHero
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    onClick={() => {
                      setValue(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.arcBlue}
                    />
                  </LearnButtonHero>
                </Grid>
              </Grid>
            </CardContent>
          </RevolutionCard>
          <RevolutionBackground />
        </Grid>
      </Grid>
      <Grid item>
        {/* -----Information Block----- */}
        <InfoBackground
          style={{ height: "80em" }}
          container
          direction="row"
          alignItems="center"
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesSM ? "center" : "inherit",
            }}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid
              sm
              item
              style={{ marginLeft: matchesSM ? 0 : matchesMD ? "2em" : "5em" }}
            >
              <Grid
                container
                style={{ marginBottom: matchesSM ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <LearnButton
                    component={Link}
                    to="/about"
                    style={{ color: "white", borderColor: "white" }}
                    variant="outlined"
                    onClick={() => {
                      setValue(3);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </LearnButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              style={{
                marginRight: matchesSM ? 0 : matchesMD ? "2em" : "5em",
                textAlign: matchesSM ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say Hello! </Typography>
                <Grid item>
                  <LearnButton
                    component={Link}
                    to="/contact"
                    style={{ color: "white", borderColor: "white" }}
                    variant="outlined"
                    onClick={() => {
                      setValue(4);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </LearnButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </InfoBackground>
      </Grid>
      <Grid item>
        {/* -----Call To Action Block----- */}
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </MainContainer>
  );
}

export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { styled, useTheme } from "@mui/system";
import { Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import CallToAction from "./ui/CallToAction";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import roots from "../assets/root.svg";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

const HeadingGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "40em",
}));
const ArrowContainer = styled(Grid)(({ theme }) => ({
  marginTop: "0.5em",
}));
const RowContainer = styled(Grid)(({ theme }) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
}));
const ItemContainer = styled(Grid)(({ theme }) => ({
  maxWidth: "40em",
}));

function CustomSoftware(props) {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <RowContainer
        item
        container
        direction="row"
        justifyContent={matchesMD ? "center" : undefined}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        {matchesMD ? null : (
          <ArrowContainer
            item
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              style={{ backgroundColor: "transparent" }}
            >
              <img src={backArrow} alt="Back to services page" />
            </IconButton>
          </ArrowContainer>
        )}

        <HeadingGrid item container direction="column">
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don???t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              We create exactly what you what, exactly how you want it
            </Typography>
          </Grid>
        </HeadingGrid>
        {matchesMD ? null : (
          <ArrowContainer item>
            <IconButton
              component={Link}
              to="/mobile-apps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src={forwardArrow}
                alt="Forward to iOS/Android App Development Page"
              />
            </IconButton>
          </ArrowContainer>
        )}
      </RowContainer>
      <RowContainer
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent="space-between"
      >
        <ItemContainer
          item
          container
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4">
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </ItemContainer>
        <ItemContainer
          direction={matchesSM ? "column" : "row"}
          item
          container
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                Whether you're a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </ItemContainer>
      </RowContainer>
      <RowContainer
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              alt="Tree with roots extending out"
              src={roots}
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <ItemContainer item>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </ItemContainer>
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent="space-between"
        style={{ marginBottom: "20em" }}
      >
        <ItemContainer
          item
          container
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4">
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Why waste time when you don't have to?
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </ItemContainer>
        <ItemContainer
          item
          direction={matchesSM ? "column" : "row"}
          container
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </ItemContainer>
      </RowContainer>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}

export default CustomSoftware;

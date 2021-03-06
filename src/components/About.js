import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React from "react";
import CallToAction from "./ui/CallToAction";

import history from "../assets/history.svg";
import profile from "../assets/chetan.jpeg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const MissionStatement = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "1.5rem",
  maxWidth: "50em",
  lineHeight: 1.4,
}));

const RowContainer = styled(Grid)(({ theme }) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  height: "25em",
  width: "25em",
  [theme.breakpoints.down("sm")]: {
    height: "20em",
    width: "20em",
    maxHeight: 300,
    maxWidth: 300,
  },
}));

function About(props) {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <RowContainer item style={{ marginTop: matchesMD ? "1em" : "2em" }}>
        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
          About Us
        </Typography>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        style={{ marginTop: "3em" }}
      >
        <MissionStatement variant="h4" align="center">
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </MissionStatement>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="space-around"
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Founded in 2019, we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                It all started with one question: Why aren't all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item lg justifyContent="center">
            <img
              src={history}
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
              alt="quill pen sitting on the page"
            />
          </Grid>
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        alignItems="center"
        direction="column"
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" paragraph>
            Chetan Bhogade, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 18 years old.
          </Typography>
        </Grid>
        <Grid item>
          <StyledAvatar alt="Founder" src={profile} />
        </Grid>
        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          {matchesLG ? null : (
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning ???
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I'm ready to apply everything I've learned, and to help
                others with the
              </Typography>
            </Grid>
          )}
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
            style={{
              marginBottom: matchesMD ? "2.5em" : 0,
            }}
            lg
          >
            <Grid item>
              <img
                src={yearbook}
                alt="yearbook page about founder"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          {matchesMD ? null : (
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning ???
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I'm ready to apply everything I've learned, and to help
                others with the
              </Typography>
            </Grid>
          )}
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : "flex-end"}
            lg
          >
            <Grid item>
              <img
                src={puppy}
                style={{ maxWidth: matchesMD ? 300 : undefined }}
                alt="gry spotted puppy"
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </RowContainer>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}

export default About;

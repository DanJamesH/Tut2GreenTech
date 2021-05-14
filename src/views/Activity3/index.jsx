import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import aerospace from "../../images/aerospace.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Activity3 = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  const classes = useStyles();

  return (
    <div style={{ overflow: "auto", paddingBottom: 35 }}>
      <Grid direction="column" container justify="center" alignItems="center">
        <Typography
          variant="h4"
          gutterBottom
          style={{ marginTop: 35, color: "#006e39" }}
        >
          Aerospace engineering
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: 50, width: "60vw", textAlign: "center" }}
        >
          Aerospace engineering is the primary field of engineering concerned
          with the development of aircraft and spacecraft. It has two major and
          overlapping branches: aeronautical engineering and astronautical
          engineering. Avionics engineering is similar, but deals with the
          electronics side of aerospace engineering.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            marginBottom: 50,
            width: "60vw",
            textAlign: "center",
          }}
        >
          <Link
            href="https://en.wikipedia.org/wiki/Aerospace_engineering"
            color="inherit"
          >
            (Wikipedia)
          </Link>
        </Typography>
        <img src={aerospace} width={200} height={200} />
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: 50, width: "60vw", textAlign: "center" }}
        >
          Through the use of our reuseable rockets and ultra-efficient engines,
          GreenTech is able to launch payloads into low earth orbit in an
          environmentally responsible manner. Furthermore, our collaboration
          with South African CubeSat manufactures allows us to build cheap
          satellite solutions to solve unique South African problems.
        </Typography>
      </Grid>
    </div>
  );
};

export default Activity3;

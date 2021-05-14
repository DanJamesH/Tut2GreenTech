import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import smartfarming from "../../images/smartfarming.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Activity2 = () => {
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
          Smart farming
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: 50, width: "60vw", textAlign: "center" }}
        >
          "Smart farming" is an emerging concept that refers to managing farms
          using technologies like IoT, robotics, drones and AI to increase the
          quantity and quality of products while optimizing the human labor
          required by production.Through remote sensing precisely smart farming
          system reduces waste, improves productivity and enables improved
          resource management.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: 10, marginBottom:50, width: "60vw", textAlign: "center" }}
        >
          <Link
            href="https://medium.com/@emorphis.technologies/what-is-smart-farming-everything-you-want-to-know-about-it-28e0e5d8e142"
            color="inherit"
          >
            (Medium)
          </Link>
        </Typography>
        <img src={smartfarming} width={200} height={200} />
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: 50, width: "60vw", textAlign: "center" }}
        >
          GreenTech aims to lower the cost of smart farming solutions by using
          off-the-shelf components and open-source software in order to allow
          small scale South African farmers to future proof their operations and
          to improve their yields.
        </Typography>
      </Grid>
    </div>
  );
};

export default Activity2;

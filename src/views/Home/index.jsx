import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import LeftText from "./components/LeftText";
import LeftList from "./components/LeftList";
import BranchMap from "./components/BranchMap";
import plant from "../../images/plant.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Home = () => {
  const [mapOpen, setMapOpen] = useState(false);

  function handleClickOpen() {
    setMapOpen(true);
  }

  function handleClose() {
    setMapOpen(false);
  }

  const classes = useStyles();

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

  return (
    <div style={{ maxHeight: height - 105, overflow: "auto" }}>
      <Grid container style={{ maxHeight: "100vh" }}>
        <Grid item xs={7}>
          <Grid
            container
            direction="column"
            style={{
              justifyContent: "center",
              height: "100%",
              alignItems: "center",
            }}
          >
            <LeftText
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
            />
            <LeftList />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid
            container
            direction="column"
            style={{ height: "100vh", alignItems: "center" }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <img src={plant} width="100%" height={height} />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <BranchMap isMapOpen={mapOpen} handleClose={handleClose} />
    </div>
  );
};

export default Home;

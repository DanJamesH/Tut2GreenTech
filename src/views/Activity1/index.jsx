import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import renewable from "../../images/renewable.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Activity1 = () => {
  return (
    <div style={{ overflow: "auto", paddingBottom: 35 }}>
      <Grid direction="column" container justify="center" alignItems="center">
        <Typography
          variant="h4"
          gutterBottom
          style={{ marginTop: 35, color: "#006e39" }}
        >
          Renewable Energy
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 50,
            marginBottom: 50,
            width: "60vw",
            textAlign: "center",
          }}
        >
          Here at GreenTech we provide both the technology and support services
          to set up custom renewable solutions for South African businesses and
          households. Often incorporating renewable sources into infrustructure
          can be overwhelming and so GreenTech provides step-by-step
          installation and on-site support. GreenTech provides solar, wind and
          hydro solutions.
        </Typography>
        <img src={renewable} width={200} height={200} />
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: 50, width: "60vw", textAlign: "center" }}
        >
          Of all South African renewable energy sources, solar holds the most
          potential. Because of the country's geographic location, it receives
          large amounts of solar energy. Wind energy is also a major potential
          source of renewable energy. Due to the high wind velocity on the coast
          of the country, Cape Town has implemented multiple wind farms, which
          generate significant amounts of energy. Renewable energy systems in
          the long-term are comparable or cost slightly less than non-renewable
          sources. 
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{ marginTop: 10, width: "60vw", textAlign: "center" }}
        >
          <Link
            href="https://en.wikipedia.org/wiki/Renewable_energy_in_South_Africa"
            color="inherit"
          >
            (Wikipedia)
          </Link>
        </Typography>
      </Grid>
    </div>
  );
};

export default Activity1;

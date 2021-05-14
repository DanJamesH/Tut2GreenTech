import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  paper: {
    maxWidth: 1200,
  },
});

function createData(number, name, description, price, stock, protein) {
  return { number, name, description, price, stock, protein };
}

const rows = [
  createData(
    1,
    "Wind Turbine: V236-15.0 MW ",
    "The V236-15.0 MW is built with the industry’s largest swept area and a capacity factor of over 60% from the 115.5m blades.",
    "5,000,000",
    14
  ),
  createData(
    2,
    "Solar Panel: ARTsolar – 370 Watt",
    "72 cell monocrystalline percium solar module with improved lifespan and efficiency with mono percium cells.",
    "2,021",
    37
  ),
  createData(
    3,
    "Micro hydro generator, Dc 5v/12v/80v",
    "Perfect for energy conversion of the water into electrical energy",
    "459,00",
    100
  ),
  createData(
    4,
    "HuzingHarvest autonomous harvester",
    "This harvester can collect crops from the field autonomously and has built in object detection",
    "399,999",
    16
  ),
  createData(
    5,
    "Crop sprayer drone",
    "6Axis agriculture drone with a 1650mm UAV drone frame and a 15L capacity tank",
    "18,366",
    24
  ),
  createData(
    6,
    "AquaMini Home Aquaponics system",
    "The AquaMini Home Modular Aquaponic System is a complete food production garden that allows you to raise your own fish along with a wide variety of vegetables",
    "15,000",
    15
  ),
  createData(
    7,
    "Falcon 9",
    "Falcon 9 is a partially reusable two-stage-to-orbit medium-lift launch vehicle",
    "873,000,000",
    3
  ),
  createData(
    8,
    "CubeSat",
    "A CubeSat is a type of miniaturized satellite for space research that is made up of multiple cubic modules",
    "563,510",
    7
  ),
  createData(
    9,
    "PurePower engine",
    "A high-bypass geared turbofan engine family that reduces carbon emissions",
    "444,507",
    7
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h4" gutterBottom style={{margin:50, color:'#006e39',}}>
        Our services
      </Typography>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Service/Product</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Price&nbsp;(R)</TableCell>
              <TableCell align="right">Stock/Avaliability&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.number}>
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

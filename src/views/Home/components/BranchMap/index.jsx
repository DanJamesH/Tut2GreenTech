import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { blue } from "@material-ui/core/colors";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import branches from "../../../../data/branches.json";
import uct from "../../../../images/uct.png";
import clarens from "../../../../images/clarens.png";
import hartbeespoort from "../../../../images/hartbeespoort.png";
import kariega from "../../../../images/kariega.png";
import mahikeng from "../../../../images/mahikeng.png";
import mbombela from "../../../../images/mbombela.png";
import stlucia from "../../../../images/stlucia.png";
import tzaneen from "../../../../images/tzaneen.png";
import upington from "../../../../images/upington.png";

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "absolute",
    height: "80vh",
    width: "50vw",
    right: "1vw",
    bottom: "5vh",
  },
  formControl: {
    marginLeft: theme.spacing(3),
    minWidth: 120,
    maxWidth: 320,
  },
}));

const BranchMap = ({ isMapOpen, handleClose }) => {
  const classes = useStyles();

  const [position, setPosition] = useState([
    branches[0].gps.latitude,
    branches[0].gps.longitude,
  ]);
  const [province, setProvince] = useState(branches[0].address.province);
  const [address, setAddress] = useState(branches[0].address.address);
  const [map, setMap] = useState(null);
  const [id, setId] = useState(0);

  const images = {
    uct,
    clarens,
    hartbeespoort,
    kariega,
    mahikeng,
    mbombela,
    stlucia,
    tzaneen,
    upington,
  };

  const handleChange = (event) => {
    setId(event.target.value);
    setProvince(branches[event.target.value].address.province);
    setAddress(branches[event.target.value].address.address);
    setPosition([
      branches[event.target.value].gps.latitude,
      branches[event.target.value].gps.longitude,
    ]);
    map.flyTo([
      branches[event.target.value].gps.latitude,
      branches[event.target.value].gps.longitude,
    ]);
  };

  function getImageByKey(key) {
    return images[key];
  }

  return (
    <div>
      <Dialog
        open={isMapOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
          paper: classes.dialog,
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {province}: {address}
        </DialogTitle>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={id}
            onChange={handleChange}
          >
            {branches.map((branch) => (
              <MenuItem value={branch.id}>{branch.address.province}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <DialogContent>
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            whenCreated={(map) => setMap(map)}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {branches.map((branch) => (
              <Marker
                key={branch.id}
                position={[branch.gps.latitude, branch.gps.longitude]}
              >
                <Popup>
                  <div style={{ display: "flex", flex: 1 }}>
                    <img
                      src={getImageByKey(branch.locationId)}
                      width={260}
                      height={190}
                    />
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BranchMap;

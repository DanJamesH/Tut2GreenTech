import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const OrderedList = ({ Products }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ol>
        <li style={{ color: "#ff0000" }}>
          <ListItem>
            <ListItemText primary={Products[0]} />
          </ListItem>
        </li>
        <li style={{ color: "#00ff00" }}>
          <ListItem>
            <ListItemText primary={Products[1]} />
          </ListItem>
        </li>
        <li style={{ color: "#0000ff" }}>
          <ListItem>
            <ListItemText primary={Products[2]} />
          </ListItem>
        </li>
      </ol>
    </List>
  );
};

export default OrderedList;

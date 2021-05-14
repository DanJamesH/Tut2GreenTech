import React from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import { Grid } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import OrderedList from "./components/OrderedList";
import img1 from '../../../../images/renewable.jpg'
import img2 from '../../../../images/smartfarming.jpg'
import img3 from '../../../../images/aerospace.jpg'
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(3),
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = (route) => history.push(route);

  const listInfo = [
    {
      key: 1,
      primary: "Renewable Energy",
      secondary: "Disrupt the fossil fuel industry",
      src: img1,
      products: ["Solar panels", "Hydro generators", "Wind turbines"],
      link: '/RenewableEnergy',
      tooltip: "Renewable Energy information",
    },
    {
      key: 2,
      primary: "Smart Farming",
      secondary: "Grow intelligently to provide for everyone",
      src: img2,
      products: ["Aquaponics", "Autonomous farming equipment", "Drone sprayers"],
      link: '/SmartFarming',
      tooltip: "Smart Farming information",
    },
    {
      key: 3,
      primary: "Aerospace Manufacturing",
      secondary: "Travel faster, further and cleaner",
      src: img3,        
      products: ["Reusable rockets", "Environmental satellites", "Ecofriendly engines"],
      link: '/AerospaceEngineering',
      tooltip: "Aerospace Manufacturing information",
    },
  ];

  return (
    <Grid
      container
      direction="column"
      style={{
        alignItems: "center",
        marginTop: "5%",
        marginBottom: "5%",
      }}
    >
      <ul style={{ width: "100%" }}>
        {listInfo.map((info) => (
          <li style={{color:"#ff0000"}}>
            <Accordion
              key={info.key}
              style={{ width: "90%", marginBottom: "3%", borderRadius: 10 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItem>
                  <ListItemAvatar>
                  <Tooltip title={info.tooltip}>
                    <div onClick={() => handleOnClick(info.link)}>
                      <Avatar alt="Remy Sharp" src={info.src} className={classes.large} />
                    </div>
                  </Tooltip>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography
                      component="span"
                      variant="h6"
                      color="textPrimary"
                      style={{fontWeight:800}}
                    >
                      {info.primary}
                    </Typography>}
                    secondary={info.secondary}
                  />
                </ListItem>
              </AccordionSummary>
              <AccordionDetails>
                <OrderedList Products={info.products}/>
              </AccordionDetails>
            </Accordion>
          </li>
        ))}
      </ul>
    </Grid>
  );
}

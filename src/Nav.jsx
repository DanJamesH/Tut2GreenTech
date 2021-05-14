import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  appBar: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    height:100,
    justifyContent: 'center',
    background: 'transparent',
    boxShadow: 'none'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color:'black'
  },
  rightButton: {
    color:'black',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  }
}));

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = (route) => history.push(route);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <div style={{display: 'flex', flex: 1}}>
          <Tooltip title="Home page">
            <Typography variant="h5" className={classes.title} onClick={() => handleOnClick('/Tut2GreenTech')}>
              GreenTech
            </Typography>
          </Tooltip>
          </div>
          <Tooltip title="Renewable Energy information">
            <Button className={classes.rightButton} style={{color:"#ebbb31"}} onClick={ () => handleOnClick('/Activity1')}>Renewable Energy</Button>
          </Tooltip>
          <Tooltip title="Smart Farming information">
            <Button className={classes.rightButton} style={{color:"#89e894"}} onClick={ () => handleOnClick('/Activity2')}>Smart Farming</Button>
          </Tooltip>
          <Tooltip title="Aerospace Engineering information">
            <Button className={classes.rightButton} style={{color:"#6b87ae"}} onClick={ () => handleOnClick('/Activity3')}>Aerospace Engineering</Button>
          </Tooltip>
          <Tooltip title="Additional services">
            <Button className={classes.rightButton} style={{color:"#887579"}} onClick={ () => handleOnClick('/Services')}>Services</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav

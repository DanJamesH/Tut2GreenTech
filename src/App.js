import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./views/Home";
import Activity1 from "./views/Activity1";
import Activity2 from "./views/Activity2";
import Activity3 from "./views/Activity3";
import Services from "./views/Services";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Tut2GreenTech" exact component={Home} />
        <Route path="/RenewableEnergy" component={Activity1} />
        <Route path="/SmartFarming" component={Activity2} />
        <Route path="/AerospaceEngineering" component={Activity3} />
        <Route path="/Services" component={Services} />
      </Switch>
    </Router>
  );
}

export default App;

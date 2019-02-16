import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import HelloPage from "./HelloPage";
import CiaoPage from "./CiaoPage";

const App = () => (
  <Router>
    <Switch>
      <Route path="/hello" component={HelloPage} />
      <Route path="/ciao" component={CiaoPage} />
      <Route render={() => <Redirect to="/hello" />} />
    </Switch>
  </Router>
);

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);

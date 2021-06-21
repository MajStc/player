import React from "react";

import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import LoginPage from "./containers/LoginPage/LoginPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  );
}

export default App;

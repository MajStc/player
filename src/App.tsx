import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import SomethingWentWrong from "./containers/SomethingWentWrong/SomethingWentWrong";
import VideoPage from "./containers/VideoPage/VideoPage";
import ProtectedRoute from "./hoc/ProtectedRoute";
import { ERROR, HOME, LOGIN, VIDEO_PLAYER } from "./utils/routes";

function App() {
  return (
    <Switch>
      <Route exact path={LOGIN} component={LoginPage} />
      <Switch>
        <ProtectedRoute exact path={HOME} component={HomePage} />
        <ProtectedRoute exact path={VIDEO_PLAYER} component={VideoPage} />
        <Route path={ERROR} component={SomethingWentWrong} />
      </Switch>
      <Route render={() => <Redirect to={ERROR} />} />
    </Switch>
  );
}

export default App;

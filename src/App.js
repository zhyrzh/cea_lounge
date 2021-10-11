import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router";

// Pages
import Home from "./components/Home/index";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default App;

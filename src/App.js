import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

// Pages
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/res" component={SearchResult} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Fragment>
  );
};

export default App;

import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

// Pages
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import AddQuestion from "./components/AddQuestion";
import Login from "./components/Login";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
};

export default App;

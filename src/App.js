import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

// Pages
import Home from "./components/Home";
// import SearchResult from "./components/SearchResult";
import AddQuestion from "./components/AddQuestion";
import Login from "./components/Login";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/ask" component={AddQuestion} />
      </Switch>
    </>
  );
};

export default App;

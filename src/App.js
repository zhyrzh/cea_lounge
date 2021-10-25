import React, { Fragment } from "react";
import { Route, Switch } from "react-router";

// Pages
import Home from "./components/Home";
// import SearchResult from "./components/SearchResult";
import AddQuestion from "./components/AddQuestion";
import Login from "./components/Login";
import Navbar from "./components/Layout/Navbar";
import Question from "./components/Question";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/ask" component={AddQuestion} />
        <Route exact path="/question" component={Question} />
      </Switch>
    </>
  );
};

export default App;

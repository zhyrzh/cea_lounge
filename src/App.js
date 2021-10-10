import React, { Suspense } from "react";
import { Route, Router } from "react-router";

const App = () => {
  const clicker = () => {
    return "this is a clicker";
  };

  return (
    <Router>
      <Suspense></Suspense>
    </Router>
  );
};

export default App;

import React, { Fragment } from "react";
import testImg from "./images/242272231_418455083318600_3757074829255949569_n.png";

const App = () => {
  return (
    <Fragment>
      <div>
        <h1>test</h1>
      </div>
      <img className="img-test" src={testImg} alt="" />
    </Fragment>
  );
};

export default App;

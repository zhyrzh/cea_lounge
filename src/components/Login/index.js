import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../../store/actions/auth";

const index = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth).isAuthenticated;

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onChangeHandler = (event) => {
    setLoginDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div style={{ marginTop: "10rem" }}>
      <input type="text" name="email" onChange={onChangeHandler} />
      <input type="text" name="password" onChange={onChangeHandler} />
      <button onClick={() => dispatch(login(loginDetails))}>Login</button>
    </div>
  );
};

export default index;

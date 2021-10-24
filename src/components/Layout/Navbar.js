import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/actions/auth";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const unAuthorizedItems = (
    <>
      <li className="header__nav-item">
        <Link to="/login">Login</Link>
      </li>
      <li className="header__nav-item">Signup</li>
    </>
  );

  const authorizedItems = (
    <>
      <li className="header__nav-item">Hi, User</li>
      <li className="header__nav-item">
        <a onClick={() => dispatch(logout())}>Logout</a>
      </li>
    </>
  );

  return (
    <div className="header">
      <ul className="header__navbar">
        {isAuthenticated ? authorizedItems : unAuthorizedItems}
      </ul>
    </div>
  );
};

export default Navbar;

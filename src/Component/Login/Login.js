import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <div className="bodyContainer">
        <div className="inputContainer">
          <input type="email" placeholder="Enter your email here" />
          <br />
          <input type="password" placeholder="Enter your password here" />
        </div>
        <div>
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/signin">
            <button className="btn">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

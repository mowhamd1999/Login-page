import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import validate from "../validate";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const touchHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});
  useEffect(() => {
    setErrors(validate(data , 'login'));
  }, [data, touch]);
  const loginHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(data)
    } else {
      setTouch({
        email: true,
        password: true,
      });
    }
  };
  return (
    <form onSubmit={loginHandler} className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <div className="bodyContainer">
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Enter your email here"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={touchHandler}
          />
          <br />
          {errors.email && touch.email && <span>{errors.email}</span>}
          <br />
          <input
            type="password"
            placeholder="Enter your password here"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={touchHandler}
          />
          <br />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
        <div>
          <button className="btn">Login</button>
          <Link to="/signin">
            <button className="btn">Sign in</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;

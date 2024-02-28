import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
const Signin = (props) => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const signHandler = () => {
    let user = {
      username,
      email,
      number,
      password,
      id: Math.floor(Math.random() * 1000),
    };
    setUsers(user);
    console.log(users);
  };
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <div className="bodyContainer">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter your username here"
            onChange={(e) => usernameHandler(e)}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your email here"
            onChange={(e) => emailHandler(e)}
          />
          <br />
          <input
            type="number"
            placeholder="Enter your number here"
            onChange={(e) => numberHandler(e)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password here"
            onChange={(e) => passwordHandler(e)}
          />
          <br />
          <input type="password" placeholder="Confirm your password" />
        </div>
        <div>
          <Link to="/signin">
            <button className="btn">Login</button>
          </Link>
          <Link to="/">
            <button className="btn" onClick={() => signHandler()}>
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin

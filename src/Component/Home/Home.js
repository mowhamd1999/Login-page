import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Welcome!</div>
        <span>this is the home page</span>
      </div>
      <div className="bodyContainer">
        <Link to="/login">
          <button className="btnContainer">Log in</button>
        </Link>
        <Link to='/signin'>
          <button className="btnContainer">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

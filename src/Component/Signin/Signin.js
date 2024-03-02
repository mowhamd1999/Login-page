import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
const Signin = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
    isAccepted: false
  });
  const changeHandler =(event) =>{
    if(event.target.name === "isAccepted"){
      setData({...data , [event.target.name]:event.target.checked})
    }else{
      setData({...data , [event.target.name] : event.target.value})
    }
    console.log(data)
  }
  const signHandler = () => {

  }
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <form className="bodyContainer">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter your username here"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your email here"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
          <br />
          <input
            type="number"
            placeholder="Enter your number here"
            name="number"
            value={data.number}
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password here"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
          <br />
          <input 
          type="password" 
          placeholder="Confirm your password"
          name="confirmpassword"
          value={data.confirmpassword}
          onChange={changeHandler}
          />
          <br />
          <div className="checkbox">
            <label className="label">I accept terms of privacy policy</label>
            <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} />
          </div>
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
      </form>
    </div>
  );
};

export default Signin;

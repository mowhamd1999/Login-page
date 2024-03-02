import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import validate from "../validate";
const Signin = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
    isAccepted: false
  });
  const [errors , setErrors] = useState({})
  const [touch , setTouch] = useState({})
  useEffect( () => {
    setErrors(validate(data))
  },[data , touch])
  const changeHandler =(event) =>{
    if(event.target.name === "isAccepted"){
      setData({...data , [event.target.name]:event.target.checked})
    }else{
      setData({...data , [event.target.name] : event.target.value})
    }
  }
  const touchHandler =(event) => {
    setTouch({...touch , [event.target.name]: true})
  }
  const signHandler = (event) => {
    event.preventDefault()
    if(!Object.keys(errors).length){
      
    }else{
      setTouch({
        username:true,
        email:true,
        number:true,
        password:true,
        confirmpassword:true,
        isAccepted:true
      })
    }
  }
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Login</div>
      </div>
      <form onSubmit={signHandler} className="bodyContainer">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Enter your username here"
            name="username"
            value={data.username}
            onChange={changeHandler}
            onFocus={touchHandler}
          />
          <br />
          {errors.username && touch.name && <span>{errors.username}</span>}
          <br />
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
            type="number"
            placeholder="Enter your number here"
            name="number"
            value={data.number}
            onChange={changeHandler}
            onFocus={touchHandler}
          />
          <br />
          {errors.number && touch.number && <span>{errors.number}</span>}
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
          <br />
          <input 
          type="password" 
          placeholder="Confirm your password"
          name="confirmpassword"
          value={data.confirmpassword}
          onChange={changeHandler}
          onFocus={touchHandler}
          />
          <br />
          {errors.confirmpassword && touch.confirmpassword && <span>{errors.confirmpassword}</span>}
          <br />
          <div className="checkbox">
            <label className="label">I accept terms of privacy policy</label>
            <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler}
            onFocus={touchHandler} /><br />
          {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
          </div>
        </div>
        <div>
          <Link to="/signin">
            <button className="btn">Login</button>
          </Link>
          <Link to="/">
            <button className="btn">
              Sign in
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;

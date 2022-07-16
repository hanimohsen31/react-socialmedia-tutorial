import React from "react";
import './Login.scss'
export const Login = () => {
  return (
    <div className="Login bg-light" >
        <div className="wrapper">
      <div className="left ">
        <h1 >Himawari</h1>
        <p >Connect with friends and the world around you on Himawari</p>
      </div>
      <div className="right ">
        <div className="form ">
          <input type="email" name="email" placeholder="Email" className="form-control my-3" />
          <input type="password" name="password" placeholder="Password" className="form-control my-3" />
          <button className="btn btn-light py-2">Log In</button>
          <a href="##" className="my-3"> Forget Password?</a>
          <button className="btn btn2">Create a New Account</button>
        </div>
      </div>
    </div>
        </div>

  );
};

import React, { Component } from "react";
import "../login.css";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <div className="login-screen">
        <h1 className="login-title">LOGIN</h1>
        <div className="username-border">
          <div className="login-username">Email or Username</div>
        </div>
        <div className="password-border">
          <div className="login-password">Password</div>
        </div>
        <a className="forgot-password">Forgotten Password?</a>
        <a className="sign-up">Not a member yet? Sign Up now</a>
        <button className="sign-btn">
          <div className="sign-in">Sign In</div>
        </button>
      </div>
    );
  }
}

export default Login;

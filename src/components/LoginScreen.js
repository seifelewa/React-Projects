import React from "react";

import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div>
      <div className="Homepage">
        <h1 className="text-1">
          A Platform for the Creative to Market Their Talent.
        </h1>
        <br></br>
        <div className="text-2">
          Find your artist. Market your talent. Always be looking for new
          opportunities.
        </div>
        <Link to="/find-talent-it">
          {" "}
          <button className="button-1">
            {" "}
            <li> Find Work </li>{" "}
          </button>{" "}
        </Link>
        <Link to="/find-work-it">
          {" "}
          <button className="button-2">
            {" "}
            <li> Find Talent </li>{" "}
          </button>{" "}
        </Link>
      </div>
      <div className="login-screen">
        <h1 className="login-title">LOGIN</h1>
        {/*<div className="username-border">*/}
        <input
          className="signUpFirstName"
          placeholder="Username Or Email"
        ></input>
        {/*</div>*/}
        {/*<div className="password-border">*/}
        <input className="signUpFirstName" placeholder="Password"></input>
        {/*</div>*/}
        <a className="forgot-password">Forgotten Password?</a>
        <a className="sign-up">Not a member yet? Sign Up now</a>
        <button className="sign-btn">
          <div className="sign-in">Sign In</div>
        </button>
      </div>
    </div>
  );
};
export default LoginScreen;

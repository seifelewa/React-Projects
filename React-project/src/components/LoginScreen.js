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
      <form className="login-screen" method="POST" action="/loginTest">
<<<<<<< Updated upstream
        <h1 className="login-title">Log In</h1>
=======
        <h1 className="login-title">LOGIN</h1>
>>>>>>> Stashed changes
        <input
          className="loginname"
          placeholder="Email"
          name="username"
        ></input>

        <input
          className="loginname"
          placeholder="Password"
          name="password"
        ></input>

        <div className="radioLogin">
          I am a:
          <div className="loginSpacing" />
          <input type="radio" value="freelancer" name="option" />
          <label>Freelancer</label> <div className="divider2" />
          <input type="radio" value="company" name="option" />
          <label>Company</label>
        </div>
        <text className="forgot-password, click">Forgotten Password?</text>
        <text className="sign-up, click">Not a member yet? Sign Up now</text>
        <button className="sign-btn">
          <div className="sign-in">Sign In</div>
        </button>
      </form>
    </div>
  );
};
export default LoginScreen;

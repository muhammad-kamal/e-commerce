import React, { useEffect, useState } from "react";
import sign from "./sign.svg";
import "./_sign.css";

function Sign() {
  let mql = window.matchMedia("(max-width: 820px)");
  let myMql = mql.matches;
  const [toggleV, setToggleV] = useState(false);

  const toggleFun = (e) => {
    e.preventDefault();
    if (toggleV == false) {
      setToggleV(true);
    } else {
      setToggleV(false);
    }
  };
  return (
    <>
      <div className="container d-flex flex-wrap signBox">
        <form
          name="signIn"
          className="fs-5 sign-in"
          style={toggleV && !myMql ? { left: "-50%" } : { left: "0" }}
        >
          <div className="form-group my-3">
            <label htmlFor="inputEmail1">Email address</label>
            <input
              name="signInEmail"
              type="email"
              className="form-control"
              id="inputEmail1"
              placeholder="Enter email"
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group my-3">
            <label htmlFor="inputPassword1">Password</label>
            <input
              name="signInPassword"
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check my-3">
            <input type="checkbox" className="form-check-input" id="check1" />
            <label className="form-check-label" htmlFor="check1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            sign in
          </button>
          <div className="account p-2 text-center">
            <p>You do not have an account?</p>
            <p>You can have one now</p>
            <button onClick={(e) => toggleFun(e)}>create Account</button>
          </div>
        </form>
        <div
          className="sign-up"
          style={
            myMql
              ? toggleV
                ? { top: "100%", opacity: "1" }
                : { top: "0", opacity: "0" }
              : toggleV
              ? { left: "50%", opacity: "1" }
              : { left: "0", opacity: "0" }
          }
        >
          <form name="signUp" className="fs-5">
            <div className="form-group my-2">
              <label htmlFor="signUpInput1">Your first name</label>
              <input
                name="signUpInput1"
                type="text"
                className="form-control"
                id="signUpInput1"
                placeholder="Your first name"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="signUpInput2">Last name</label>
              <input
                name="signUpInput1"
                type="text"
                className="form-control"
                id="signUpInput1"
                placeholder="Last name"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="signUpEmail1">Email address</label>
              <input
                name="signUpEmail1"
                type="email"
                className="form-control"
                id="signUpEmail1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="signUpPassword1">Password</label>
              <input
                name="signUpPassword1"
                type="password"
                className="form-control"
                id="signUpPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="signUpPassword2">Confirm password</label>
              <input
                name="signUpPassword2"
                type="password"
                className="form-control"
                id="signUpPassword2"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary my-2">
              sign up
            </button>
          </form>
        </div>
        <div className="signImg">
          <img src={sign} />
        </div>
      </div>
    </>
  );
}

export default Sign;

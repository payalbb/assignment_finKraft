import React from "react";

import { useState } from "react";

const Login = () => {
  return (
    <>
      <div className="Login-form">
        <div className="container">
          <div className="Login-form-inner">
            <div className="Login-buttons">
              <a className="btn-1" href="/Login">
                Login
              </a>
              <a className="btn-2" href="/Register">
                Regiter
              </a>
            </div>
            <div>
              <p>Sign in with:</p>
              <form>
                <div class="form-check form-checkk">
                  <label>
                    <input type="text" placeholder="Enter your name" />
                  </label>
                </div>
                <div class="form-check form-checkk">
                  <label>
                    <input type="text" placeholder="Enter your password" />
                  </label>
                </div>
                <div class="form-check form-check-check">
                  <label class="form-check-label" for="flexCheckChecked">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckChecked"
                    />
                    Remember me
                  </label>
                  <a href="/home">Forgot password?</a>
                </div>
                <input type="submit" className="submit-btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

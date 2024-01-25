import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={"form-container"}>
      <div className={"form-wrapper"}>
        <form className={"form-content"}>
          <h1>Sign in to your account</h1>
          <label>Email</label>
          <input type="email" required placeholder="your email" />
          <label>Password</label>
          <input type="password" required placeholder="your password" />
          <Link href="/">
            <button type="submit">continue</button>
          </Link>

          <p>Forgot Password</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

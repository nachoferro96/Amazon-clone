import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginlogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login-signin">Sign in</button>
        </form>

        <p>
          Al registrarse o ingresar usted esta aceptando nuestras condiciones de
          uso y nuestra policita. Por favor chequee nuestra politica de
          privacidad en caso de dudas.
        </p>

        <button className="login-register">Create Amazon Account</button>
      </div>
    </div>
  );
}
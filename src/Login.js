import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase"


export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = e => {
    e.preventDefault()
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
        history.push("/")
      
    })
    .catch(error => alert(error.message))
  
  }

  const register = e => {
    e.preventDefault()
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if (auth){
        history.push("/")
      }
    })
    .catch(error => alert(error.message))
  }

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
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="login-signin" type="submit" onClick={signin}>Sign in</button>
        </form>

        <p>
          Al registrarse o ingresar usted esta aceptando nuestras condiciones de
          uso y nuestra policita. Por favor chequee nuestra politica de
          privacidad en caso de dudas.
        </p>

        <button className="login-register" type="submitgit" onClick={register}>Create Amazon Account</button>
      </div>
    </div>
  );
}

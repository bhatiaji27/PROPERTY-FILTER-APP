import React, { useState } from "react";
import "./LoggIn.css";
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import HomeImg from "../images/home.png"

function LoggIn({ showAlert,onAuth }) {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setEmail("");
        setPassword("");
        showAlert("Success","You have been registered.");
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        console.log(errorCode);
        showAlert("Failed",errorCode);
      });
  };
  
  const signIn = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    onAuth();
    console.log(userCredential);
    localStorage.setItem('token',userCredential.user.accessToken);
    showAlert("Success","You have been signed In.");
  })
  .catch((error) => {
    const errorCode = error.code;
    showAlert("Failed",errorCode);
  });
  }


  return (
    <>
    <h1 className="login-head">Welcome to PropFinder Web App</h1>
      <main className="form-signin text-center">
        <div className="formdiv">

          <img src={HomeImg} alt="Home" width="65" height="57"/>
          
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button onClick={signUp} className="w-100 btn btn-lg btn-primary">
            Sign Up
          </button>
          <button onClick={signIn} className="w-100 btn btn-lg btn-success">
            Sign In
          </button>
          <p className="mt-5 mb-2 text-muted">&copy; 2022 - Arush Bhatia</p>
        </div>
      </main>
    </>
  );
}

export default LoggIn;


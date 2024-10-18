import React, { useState } from "react";
import {App} from './firebase'; 
import "./App.css"
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(App);

export default function DyEmailPass() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true); 

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Sign-up Success"))
      .catch((err) => console.log(err.message));
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log("Sign-in Success"))
      .catch((err) => console.log(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      signUpUser();
    } else {
      signInUser();
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>
      <br />
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
}

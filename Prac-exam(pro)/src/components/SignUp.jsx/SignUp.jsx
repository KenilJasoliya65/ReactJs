import React, { useState } from "react";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import '../Compo.css';
const auth = getAuth(app);

export default function SignUp() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log("successfully signup"))
      .catch((error) => console.log(error));
    SetEmail("");
    SetPassword("");
  };
  return (
    <form action="" onSubmit={handleSignUp}>
      <input
        type="email"
        placeholder="Enter Email : "
        value={email}
        onChange={(e) => SetEmail(e.target.value)}
      ></input>
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password : "
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
      ></input>
      <br />
      <br />
      <button type="submit">SignUp</button>
      <br />
      <br />
      <span>
        Already Have an account <Link to="/signIn">Sign In</Link>
      </span>
    </form>
  );
}

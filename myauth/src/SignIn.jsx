import React, { useState } from "react";
import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);
export default function SignIn() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => console.log("successfully signin"))
      .catch((error) => console.log(error));
    SetEmail("");
    SetPassword("");
  };
  return (
    <>
      <form action="" onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Enter Email : "
          value={Email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password : "
          value={Password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="Submit">Sign In</button>
        <br />
        <br />
        <span>Don't Have an Account</span>
        <Link to="/">Create here</Link>
        <br />
        <span>Don't remember your password</span>
        <Link to="/Passwordreset">Reset Password</Link>
      </form>
    </>
  );
}

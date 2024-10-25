import React, { useState } from "react";
import { app } from "./firebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);

export default function PasswordReset() {
  const [Email, SetEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, Email)
      .then(() => console.log("Reset link sent to your email"))
      .catch((error) => console.log(error));
    SetEmail("");
  };

  return (
    <>
      <form action="" onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={Email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Send Reset Link</button>
        <br />
        <br />
        <span>
          Back to <Link to="/signIn">Sign In</Link>
        </span>
      </form>
    </>
  );
}

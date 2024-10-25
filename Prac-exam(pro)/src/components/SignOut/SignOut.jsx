import React from "react";
import { app } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Compo.css';

const auth = getAuth(app);

export default function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully signed out");
        navigate("/"); 
      })
      .catch((error) => console.log("Sign-out error:", error));
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <button onClick={handleSignOut}>Sign Out</button>

      <br />
      <br />
      <div className="d-flex justify-content-center">
            Sign In Again!!!
            <Link to="/signIn" className="btn btn-primary mx-4">
              Sign In
            </Link>
      </div>
    </div>
  );
}

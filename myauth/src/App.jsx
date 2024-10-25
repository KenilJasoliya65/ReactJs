import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import PasswordReset from "./PasswordReset";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/Passwordreset" element={<PasswordReset />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>AUTH</h1>
      </div>
      <nav className="header-right">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/signIn">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <a href="/signIn">Sign In</a>
          </li>
          <li>
            <a href="/Passwordreset">Password Reset</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default App;

import {Routes , Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import SignUp from "./components/SignUp.jsx/SignUp";
import SignIn from "./components/SignIn/SignIn";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import SignOut from "./components/SignOut/SignOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/Passwordreset" element={<PasswordReset />} />
        <Route path="/signOut" element={<SignOut />} />
      </Routes>
    </>
  );
}

export default App;

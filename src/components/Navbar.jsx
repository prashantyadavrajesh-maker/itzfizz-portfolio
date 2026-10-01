import { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

import Login from "./Login";
import Signup from "./Signup";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const closeAuth = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <>
      <nav className="navbar">

        {/* Logo */}
        <a href="#home" className="nav-logo">
          <img src={logo} alt="ITZFIZZ Logo" />
        </a>
<div className="nav-links">

  <a href="#home">
    Home
  </a>

  <a href="#services">
    Stack
  </a>

  <a href="#work">
    Work
  </a>

  <a href="#about">
    About
  </a>

  <a href="#contact">
    Contact
  </a>

</div>
        {/* Auth */}
        <div className="auth-buttons">

          <button
            className="login-btn"
            onClick={openLogin}
          >
            Login
          </button>

          <button
            className="signup-btn"
            onClick={openSignup}
          >
            Sign Up
          </button>

        </div>
      </nav>

      {/* Login */}
      {showLogin && (
        <Login
          onClose={closeAuth}
          onSignUp={openSignup}
        />
      )}

      {/* Sign Up */}
      {showSignup && (
        <Signup
          onClose={closeAuth}
          onLogin={openLogin}
        />
      )}
    </>
  );
}
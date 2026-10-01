import { useState } from "react";
import "./Auth.css";

export default function Login({ onClose, onSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    alert("Login form submitted.");
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div
        className="auth-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="auth-close" onClick={onClose}>
          ×
        </button>

        <p className="auth-tag">WELCOME BACK</p>

        <h2>
          Login to <span>ITZFIZZ</span>
        </h2>

        <p className="auth-description">
          Sign in to continue your journey.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="auth-field">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-field">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-submit">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <button onClick={onSignUp}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
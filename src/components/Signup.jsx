import { useState } from "react";
import "./Auth.css";

export default function Signup({ onClose, onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    alert("Account created successfully.");
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

        <p className="auth-tag">GET STARTED</p>

        <h2>
          Create <span>Account</span>
        </h2>

        <p className="auth-description">
          Create your ITZFIZZ account to get started.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="auth-field">
            <label>Name</label>

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-submit">
            Sign Up
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <button onClick={onLogin}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
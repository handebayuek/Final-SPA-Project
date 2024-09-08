import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onRegisterClick = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("All fields are required");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      navigate("/login");
    }
  };

  return (
    <div className={"register-page"}>
      <div className={"register-form"}>
        <div className={"register-header"}>
          <h1 className="register-h1">Register</h1>
        </div>
        <div className={"register-container"}>
          <h3>Name</h3>
          <input
            value={name}
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
            className={"register-box"}
          />
        </div>
        <div className={"register-container"}>
          <h3>Email</h3>
          <input
            value={email}
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
            className={"register-box"}
          />
        </div>
        <div className={"register-container"}>
          <h3>Password</h3>
          <input
            value={password}
            type="password"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
            className={"register-box"}
          />
        </div>
        <div className={"register-container"}>
          <h3>Confirm Password</h3>
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={"register-box"}
          />
        </div>
        <div className={"register-container"}>
          <input
            className={"register-btn"}
            type="button"
            onClick={onRegisterClick}
            value={"Register"}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;

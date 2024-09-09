import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    if (email === "") {
      setEmailError("Email cannot be empty");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }

    if (email && password) {
      navigate("/");
    }
  };

  const onRegisterClick = () => {
    navigate("/registration");
  };

  return (
    <div className={"mainContainer"}>
      <div className={"login-form"}>
        <div className={"titleContainer"}>
          <h1>Login</h1>
        </div>
        <div className={"inputContainer"}>
          <label>Email</label>
          <input
            value={email}
            placeholder="Enter your email here..."
            onChange={(e) => setEmail(e.target.value)}
            className={"inputBox"}
          />
          {emailError && <span>{emailError}</span>}
        </div>
        <div className={"inputContainer"}>
          <label>Password</label>
          <input
            value={password}
            placeholder="Enter your password here..."
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
            type={"password"}
          />
          {passwordError && <span>{passwordError}</span>}
        </div>
        <div className={"inputButtonDiv"}>
          <div className="login-btn">
            <input
              className={"inputButton"}
              type="button"
              onClick={onButtonClick}
              value={"Log in"}
            />
          </div>
          <p>or</p>
          <div className="login-btn">
            <input
              className={"inputButton"}
              type="button"
              onClick={onRegisterClick}
              value={"Register"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

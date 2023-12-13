import React from "react";
import authStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { loginInputField, handleLoginInput, handleLogin } = authStore();

  const loginForm = async (e) => {
    e.preventDefault();
    await handleLogin();
    navigate("/notes");
  };

  return (
    <div>
      <form onSubmit={loginForm}>
        <p>
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={loginInputField.email}
            onChange={handleLoginInput}
          />
        </p>
        <p>
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={loginInputField.password}
            onChange={handleLoginInput}
          />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

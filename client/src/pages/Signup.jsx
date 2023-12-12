import React from "react";
import authStore from "../store/authStore";
import { useNavigate } from "react-router";

function Signup() {
  const { signupInputField, handleSignupInput, handleSignup } = authStore();
  const navigate = useNavigate();
  const handleSignupForm = async (e) => {
    e.preventDefault();
    await handleSignup();
    navigate("/login");
  };
  return (
    <div>
      <form onSubmit={handleSignupForm}>
        <p>
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={signupInputField.email}
            onChange={handleSignupInput}
          />
        </p>
        <p>
          <input
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={signupInputField.password}
            onChange={handleSignupInput}
          />
        </p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;

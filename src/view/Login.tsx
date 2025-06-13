import { useContext, useState } from "react";
import React from "react";
import { ModalContext } from "../App";
import LoginConfirmation from "./LoginConfirmation";
import MemberSignUp from "./MemberSignUp";

interface LoginPropTypes  {
  onCancel: () => void;
  onLogin: () =>void;
  onSignup: () => void;

}
const Login: React.FC<LoginPropTypes> = ({ onCancel, onLogin, onSignup }) => {
  const [username, setUsername] = useState<React.ReactNode>();
  const [password, setPassword] = useState<React.ReactNode>();
  const modalContext = useContext(ModalContext);
  const [error, setError] = useState<string>();

  const onLoginClick = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (result.ok && modalContext) {
        modalContext.setModalContent(
          <LoginConfirmation
            onCancel={() => {
              modalContext.setModalContent(undefined);
              onCancel();
            }}
          />
        );
         onLogin();
      } else {
        setError(result.error && 'You are not a member' || "Login Failed");
        
      }
    } catch (err) {
      setError("Error fetching the info...");
      console.error("Login error:", err);
    }
  };
  
  return (
    <form>
      <input
        type="email"
        className="input-styles"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="type your email"
      />
      <input
        type="password"
        className="input-styles"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="type your password"
      />
      <button className="button login-button" onClick={onLoginClick}>
        Login
      </button>
      <button className="button" onClick={onCancel}>
        Cancel
      </button>
      <br /><br />
      Not a member?<button className="link-button" onClick={onSignup}>Sign up </button>
      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
    </form>
  );
};

export default Login;

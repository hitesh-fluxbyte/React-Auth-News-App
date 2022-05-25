import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ authenticate }) => {
  const navigate = useNavigate();
  const onClick = () => {
    authenticate();
    navigate("/");
  };
  return (
    <div>
      <button onClick={onClick}>Authenticate</button>
    </div>
  );
};
export default Auth;
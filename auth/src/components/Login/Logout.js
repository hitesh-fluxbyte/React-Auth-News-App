import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Navlink";

function Logout(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    console.log("Called");
  };
  return (
    <div className="App">
      <button onClick={handleLogout} className="btn btn-danger" type="submit">
        Logout
        <Layout />
      </button>
    </div>
  );
}
export default Logout;

import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    console.log("User LogOut");
  };
  return (
    <div className="container">
      <h4 className="container my-4">
        Are You Sure !!!! Do You Want To LogOut!!!
      </h4>
      <button onClick={handleLogout} className="btn btn-warning" type="submit">
        Logout
      </button>
    </div>
  );
}
export default Logout;

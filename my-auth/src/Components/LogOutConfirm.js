import { useNavigate } from "react-router-dom";

function LogOutConfirm(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    console.log("User LogOut");
  };
  return (
    <div className="container">
      <h4 className="container my-4">Do You Want To LogOut!!!</h4>
      <button className="btn btn-secondary" onClick={props.onClose}>
        Cancel
      </button>
      <button className="btn btn-danger" onClick={handleLogout}>
        Confirm
      </button>
    </div>
  );
}

export default LogOutConfirm;

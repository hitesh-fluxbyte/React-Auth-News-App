import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Database
  const database = [
    {
      username: "admin",
      password: "admin",
    },
    {
      username: "root",
      password: "root",
    },
  ];

  // Error
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  // Render Error Message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // Handle Event
  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // setIsSubmitted(true);
        navigate("/dashboard");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Logout
  const logout = () => {
    setIsSubmitted(false);
  };
  const LoginForm = (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Username</h3>
        <input name="uname" type="text" required />
        {renderErrorMessage("uname")}
      </div>
      <br></br>
      <div>
        <h3>Password</h3>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <br></br>
      <div>
        <button className="btn btn-primary submitBtn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
  return (
    <>
      <div className="App">
        {isSubmitted ? <Dashboard logout={logout} database={database} /> : LoginForm}
      </div>
    </>
  );
}
export default Login;

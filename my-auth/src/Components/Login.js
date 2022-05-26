import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

function Login() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        console.log(errors.pass);
      } else {
        setIsSubmitted(true);
        navigate("/news");
        console.log("User Logged In");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      console.log(errors.uname);
    }
  };

  const LoginForm = (
    <form onSubmit={handleSubmit} className="container my-2">
      <div className="container my-2">
        <h3>Username</h3>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="container my-2">
        <h3>Password</h3>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="container">
        <button className=" btn btn-primary submitBtn my-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <>
      <div className="container">{isSubmitted ? <Home /> : LoginForm}</div>
    </>
  );
}

export default Login;

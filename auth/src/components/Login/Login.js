import React from "react";
import Styles from "./Login.modules.css";

function Login() {
  return (
    <div className={`${Styles.dFlex}`}>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Login;

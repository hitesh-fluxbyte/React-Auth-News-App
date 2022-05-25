import React from "react";
import Logout from "../Login/Logout";
import Navbar from "../Pages/Navbar";

function Dashboard(props) {
  return (
    <>
      <Navbar />
      <h1 className="App">Auth-Application</h1>
      <h2 className="App"> Here is Dashboard-Home Page</h2>
      <br></br>
      <Logout />
    </>
  );
}
export default Dashboard;

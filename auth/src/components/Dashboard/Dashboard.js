import React from "react";
import Logout from "../Login/Logout";
import Navbar from "../Pages/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <h1 className="App">Auth-Application</h1>
      <h2 className="App"> Here is Dashboard Page</h2>
      <Logout />
    </>
  );
}
export default Dashboard;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Logout from "./Logout";
import NoPage from "./NoPage";
import Layout from "./Layout";

function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Layout />}>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="logout" element={<Logout />}></Route>
          </Route>  
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default Home;

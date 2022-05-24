import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Contact from "./components/Pages/Contact";
import NoPage from "./components/Pages/Nopage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="" element={<Dashboard />}></Route>
          </Route>
          <Route path="/contact" element={<ProtectedRoute />}>
            <Route path="" element={<Contact />}></Route>
          </Route>
          {/* <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>}></Route> */}
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

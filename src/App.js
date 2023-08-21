import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Upload from "./Components/Upload";
import Download from "./Components/Download";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {

    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };



  return (
    <Router>
      {isLoggedIn && (
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} path="/home" />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <Home
                sidebarOpen={sidebarOpen}
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/upload"
          element={<Upload sidebarOpen={sidebarOpen} />}
        />
        <Route
          path="/download"
          element={<Download sidebarOpen={sidebarOpen} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

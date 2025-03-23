import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home Page/HomePage";
import SignUp from "./components/Signup/SignUp";
import Login from "./components/Login/Login";
import AccountSettings from "./components/Account/Account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;

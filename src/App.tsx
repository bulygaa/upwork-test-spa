import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Private from "routes/Private";
import Public from "routes/Public";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Public children={<Navigate to="/login" />} />}
      />
      <Route
        path="/login"
        element={<Public children={<div>Login Page</div>} />}
      />
      <Route
        path="/leads"
        element={<Private children={<div>Leads Page</div>} />}
      />
      <Route
        path="/overview"
        element={<Private children={<div>Overview Page</div>} />}
      />
      <Route path="*" element={<div>NotFound Page</div>} />
    </Routes>
  );
}

export default App;

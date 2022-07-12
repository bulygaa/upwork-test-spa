import { useDatabase } from "hooks/useDatabase";
import LoginPage from "pages/Login";
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Private from "routes/Private";
import Public from "routes/Public";
import "./App.css";

function App() {
  const { fetchLeads, fetchUsers, getUsers, getLeads } = useDatabase();

  useEffect(() => {
    const users = getUsers();
    const leads = getLeads();
    
    if (!users) fetchUsers();
    if (!leads) fetchLeads();
  }, [fetchLeads, fetchUsers, getUsers, getLeads]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Public children={<Navigate to="/login" />} />}
      />
      <Route path="/login" element={<Public children={<LoginPage />} />} />
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

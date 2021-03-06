import LeadsPage from "pages/Leads";
import LoginPage from "pages/Login";
import NotFound from "pages/NotFound";
import OverviewPage from "pages/Overview";
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
      <Route path="/login" element={<Public children={<LoginPage />} />} />
      <Route
        path="/leads"
        element={<Private children={<Private children={<LeadsPage />} />} />}
      />
      <Route
        path="/overview"
        element={<Private children={<Private children={<OverviewPage />} />} />}
      />
      <Route path="*" element={<Public children={<NotFound/>} />} />
    </Routes>
  );
}

export default App;

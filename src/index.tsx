import LeadsProvider from "context/Emails";
import UserProvider from "context/User";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <LeadsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LeadsProvider>
    </UserProvider>
  </React.StrictMode>
);

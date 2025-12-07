// src/App.jsx
import React, { useEffect } from "react";
import { useActiveSection } from "./context/ActiveSectionContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Shared/layout/Header";
import Footer from "./components/Shared/layout/Footer";
import "./App.scss";


import Home from "./components/Home/Home";
import UnderMaintenance from "./components/UnderMaintenance/UnderMaintenance";
import { routerLinks } from "./components/Shared/navigationLnks";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </>
  );
};

function App() {
  const [first, ...rest] = routerLinks;
  const UnderMaintenanceEnabled = false; // flip to true when needed

  return (
    <Routes>
      {UnderMaintenanceEnabled ? (
        // Maintenance mode: catch-all route
        <Route path="*" element={<UnderMaintenance />} />
      ) : (
        <>
          {/* First route (e.g., home) */}
          <Route
            path={"/"}
            element={<Home />}
          />

          {/* Rest of the routes */}
          {rest.map((item) => (
            <Route
              key={item.id}
              path={item.path}
              element={<Layout>{item.element}</Layout>}
            />
          ))}
        </>
      )}
    </Routes>
  );
}



export default App;

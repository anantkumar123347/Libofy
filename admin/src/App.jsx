import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Addbook from "./components/Addbook";
import Allbooks from "./components/Allbooks";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested Routes */}
          <Route path="addbook" element={<Addbook />} />
          <Route path="allbooks" element={<Allbooks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

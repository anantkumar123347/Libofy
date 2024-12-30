import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Addbook from "./components/Addbook";
import Allbooks from "./components/Allbooks";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route */} 
        <Route path="/" element={<LoginPage />} />

        {/* Protected Dashboard Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            {/* Nested Routes */}
            <Route path="addbook" element={<Addbook />} />
            <Route path="allbooks" element={<Allbooks />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

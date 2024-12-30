import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
  {/* Login Route */}
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register/>}/>
  {/* Protected Route */}
  <Route element={<PrivateRoute />}>
    <Route path="/home" element={<Homepage />} />
  </Route>
</Routes>

    </Router>
  );
}

export default App;

import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import CartPage from './pages/Cartpage'
import Aboutpage from './pages/Aboutpage'
import Contactpage from './pages/Contactpage'
import Layout from "./pages/Layout";
function App() {
  return (
    <Router>
      <Routes>
  {/* Login Route */}
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register/>}/>
  {/* Protected Route */}
  <Route element={<PrivateRoute />}>
  <Route element={<Layout />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
  </Route>
</Routes>

    </Router>
  );
}

export default App;

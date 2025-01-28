import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function logincall(e) {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      console.log("Login successful:", data);
      alert("Login successful");
  
      // Store token and user info in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userEmail', email); // Storing the email (or name) here
  
      console.log("Token and email stored:", data.token, email);
  
      navigate("/home");
      console.log("Navigating to /home");
    } catch (error) {
      console.error("Error during login:", error.message);
      alert(error.message);
    }
  }
  
  function moveToRegister()
  {
    navigate("/register")
  }

  return (
    <div className="login">
      <form onSubmit={logincall}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className='registersection'>
      <p>Stll not registered??</p>
      <button onClick={moveToRegister}>Register here now</button>
      </div>
    </div>
  );
}

export default Loginform;

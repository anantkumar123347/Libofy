import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
function LoginPage() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate =useNavigate()
  async function logincall(e)
  {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/admin/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Ensure correct structure
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      console.log("Login successful:", data);
      alert("Login successful");
      navigate('/dashboard')
    } catch (error) {
      console.error("Error during login:", error.message);
      alert(error.message);
    }

  }
  return (
    <div className='login'>
        <form onSubmit={logincall}>
          <input type="email" placeholder='Username' onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <br />
          <br />
          <br />
          <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <br />
          <br />
          <br />
          <button>login</button>
        </form>
    </div>
  )
}

export default LoginPage
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Registerfrom() {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [plainpassword, setPassword] = useState("");
        const navigate = useNavigate();
      
        async function Registercall(e) {
          e.preventDefault();
      
          try {
            const response = await fetch("http://localhost:5000/user/register/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name,email, plainpassword }),
            });
      
            const data = await response.json();
      
            if (!response.ok) {
              throw new Error(data.message || "Register failed");
            }
      
            console.log("Register successful:", data);
            alert("Registered successfully");
            navigate("/");
          } catch (error) {
            console.error("Error during Registering:", error.message);
            alert(error.message);
          }
        }
        function moveToLogin()
        {
            navigate("/")
        }
  return (
    <div className="login">
      <form onSubmit={Registercall}>
        <div>
        <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            value={plainpassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className='registersection'>
      <p>Already registered??</p>
      <button onClick={moveToLogin}>Login now!</button>
      </div>
    </div>
  )
}

export default Registerfrom
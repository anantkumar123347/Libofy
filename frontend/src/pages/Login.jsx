import React from 'react';
import './Login.css';
import img from '../assets/@NethBookPoint.com (1).png';
import { FaUser } from 'react-icons/fa';
import Loginform from '../components/Loginform';

function Login() {
  return (
    <div className="maindiv">
      <div>
        <img src={img} alt="Libofy Logo" />
      </div>
      <div className="rightdiv">
        <div className='icondiv'>
        <FaUser className="icon" />
        </div>
        <h1>Login into Your Account!</h1>
        <Loginform />
      </div>
    </div>
  );
}

export default Login;

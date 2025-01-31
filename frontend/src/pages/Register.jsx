import React from 'react'
import img from '../assets/@NethBookPoint.com (1).png';
import { FaUser } from 'react-icons/fa';
import './Register.css'
import Registerfrom from '../components/Registerfrom';
function Register() {
    return (
        <div className="maindiv">
          <div>
            <img src={img} alt="Libofy Logo" />
          </div>
          <div className="rightdiv">
            <div className='icondiv'>
            <FaUser className="icon" />
            </div>
            <h1>Register Your Account!</h1>
            <Registerfrom/>
          </div>
        </div>
      );
}

export default Register
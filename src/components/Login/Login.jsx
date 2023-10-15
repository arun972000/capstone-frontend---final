/* eslint-disable react/no-unescaped-entities */
import "./login.css";
import { useState } from "react";
import { Url } from "../../../Url";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
  from 'mdb-react-ui-kit';
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  // State variables to store the email and password values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle change for the email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle change for the password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const submitValue = async (e) => {
    e.preventDefault(); 

    try {
      if ( !email || !password ) {
        return alert("All fields are required");
      }
      const res = await axios.post(`${Url}api/login`, { email, password });
      dispatch({ type: 'user_login', data: "" })
      alert("Login success");
      const resJsonString = JSON.stringify(res.data);
      localStorage.setItem("user", resJsonString);
      navigate("/")
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  }
    

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow className="shadow p-3 mb-5 bg-white rounded">
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column">
            <div className="text-center">
              <img
                src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
                style={{ width: '185px' }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Warm Greetings!</h4>
            </div>
            <p>Please login to your account</p>
            {/* Email input with value and onChange */}
            <MDBInput
              wrapperClass='mb-4'
              label='Email address'
              id='form1'
              type='email'
              value={email}
              onChange={handleEmailChange}
              name="email"
            />
            {/* Password input with value and onChange */}
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='form2'
              type='password'
              value={password}
              onChange={handlePasswordChange}
              name="password"
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <button className="btn mb-4 w-100 gradient-custom-2 text-white" onClick={submitValue}>Sign in</button>
              <Link className="text-muted" to="/">Forgot password?</Link>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link to="/register"><button  className='btn btn-danger mx-2' color='danger'>
                Register
              </button></Link>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginForm;

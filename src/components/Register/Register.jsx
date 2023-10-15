import "./register.css";
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import axios from "axios";
import { Url } from "../../../Url";
import { Link, useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate=useNavigate()
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitRegistration = async () => {
    try {
      if (!fullName || !email || !password || !confirmPassword) {
        alert("All fields are required");
      } else if (password !== confirmPassword) {
        alert("Passwords do not match");
      } else {
        await axios.post(`${Url}api/register`, { fullName, email, password });
        alert("Registration success");
        navigate("/login");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  
  return (
    <MDBContainer className="my-5 gradient-form ">
      <MDBRow className="shadow p-3 mb-5 bg-white rounded">
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column">
            <div className="text-center">
              <img
                src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
                style={{ width: '185px' }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">Create an Account</h4>
            </div>
            <p>Please fill out the registration form</p>
            <MDBInput
              wrapperClass='mb-4'
              label='Full Name'
              id='fullName'
              type='text'
              value={fullName}
              onChange={handleFullNameChange}
              name="fullName"
              required
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Email address'
              id='email'
              type='email'
              value={email}
              onChange={handleEmailChange}
              name="email"
              required
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='password'
              type='password'
              value={password}
              onChange={handlePasswordChange}
              name="password"
              required
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Confirm Password'
              id='confirmPassword'
              type='password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              name="confirmPassword"
              required
            />
            <div className="text-center pt-1 mb-5 pb-1">
              <button className="btn text-white mb-4 w-100 gradient-custom-2" onClick={submitRegistration}>
                Register
              </button>
              <Link className="text-muted" to="/login">Already have an account? Login here</Link>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Join our community</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegistrationForm;

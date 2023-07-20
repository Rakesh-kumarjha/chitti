import React, { useState } from 'react';
import './Signup.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

const Signup = () => {
  const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);

  function openSignupForm() {
    setIsSignupFormOpen(true);
  }

  function closeSignupForm() {
    setIsSignupFormOpen(false);
  }

  function handleSignupFormSubmit(event) {
    event.preventDefault();
    // Add your signup form submission logic here
    console.log('Signup form submitted');
  }

  return (
    <div>
      <div className="formcontainer">
        <button className="open-button" onClick={openSignupForm}>
          Signup
        </button>
        {isSignupFormOpen && (
          <div className="form-popup">
            <form style={{ border: '1px solid #ccc' }} onSubmit={handleSignupFormSubmit}>
              <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label htmlFor="psw-repeat">
                  <b>Repeat Password</b>
                </label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

                <label>
                  <input type="checkbox" name="remember" style={{ marginBottom: '15px' }} /> Remember me
                </label>

                <p>
                  By creating an account you agree to our <a href="#">Terms & Privacy</a>.
                </p>

                <div className="clearfix">
                  <button type="button" className="cancelbtn" onClick={closeSignupForm}>
                    Cancel
                  </button>
                  <button type="submit" className="signupbtn">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;

import React from 'react'
import './home.css'
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineDown  } from 'react-icons/ai';
import { FaLocationArrow  } from 'react-icons/fa';
import { AiFillTwitterCircle  } from 'react-icons/ai';
import { TiSocialPinterestCircular  } from 'react-icons/ti';
import { FaInstagramSquare  } from 'react-icons/fa';
import { FaFacebook  } from 'react-icons/fa';
import { useState } from 'react';


function Home() {
  const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  function openSignupForm() {
    setIsSignupFormOpen(true);
  }

  function closeSignupForm() {
    setIsSignupFormOpen(false);
  }

  function openLoginForm() {
    setIsLoginFormOpen(true);
  }

  function closeLoginForm() {
    setIsLoginFormOpen(false);
  }

  function handleSignupFormSubmit(event) {
    event.preventDefault();
    // Add your signup form submission logic here
    console.log('Signup form submitted');
  }

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    // Add your login form submission logic here
    console.log('Login form submitted');
  }

  
  return (
    <div>
      <div class="contmerg">
        <div className='cont1'>
          <div className='cont1_text'><h1>SAPTOSI JEWELLERS</h1>
            <h2>Showcasing Artison custom jewellery</h2>
            <button class=" button1">See our peices</button>
          </div>
        </div>
        <div className='cont2'>
        <div className="formcontainer">
        <button className="open-button" onClick={openSignupForm}>
          Signup
        </button>
        <button className="open-button" onClick={openLoginForm}>
        Login
      </button>
        {isSignupFormOpen && (
          <div className="signup-form-popup">
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
      <div className="logincontainer">
      
      {isLoginFormOpen && (
        <div className="login-form-popup">
          <form className="form-container" onSubmit={handleLoginFormSubmit}>
            <h1>Login</h1>

            <label htmlFor="email">
              <b>Email</b>
            </label><br></br>
           <div className='email'> <input type="text" placeholder="Enter Email" name="email" required /></div>
              <br></br>
            <label htmlFor="psw">
              <b>Password</b>
            </label><br></br>
            <div className='password'><input type="password" placeholder="Enter Password" name="psw" required /></div>
              <br></br>
            <button type="submit" className="btn">
              Login
            </button>
            <button type="button" className="btn cancel" onClick={closeLoginForm}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>

        </div>
        </div>

        <div className='aboutus'>
        <div className='aboutxt'><h1><center>ABOUT US</center></h1></div>
        <div className='whole'>
        <div className='column1'><h2>Cultivating Sparkling relationship</h2>
        <p>Saptosi Jewellers has made it their mission to strive every day to
         earn the confidence and trust of our clients by meeting and exceeding their expectations 
         of quality, service, and unsurpassed value. We ensure our actions are consistent with our 
         Corporate Values, enabling us to maintain the relationships and 
        reputation, which our firm has developed throughout our history. </p></div>
        
        <div className='column2'><h2>Our Promise</h2>
        <p>Exquisitely designed pieces that stand the test of time , For the tasteful women. At Saptosi, jewelry is not merely a product, but rather a manifestations   </p> </div>
        </div>
        </div>

        <div className='contact'><h1><center>CONTACT US</center></h1></div>
        <div className='better'><h2><center>Better yet, see us in person!</center></h2></div>
        <div className='We'><h2><center>We love our customers, so feel free to visit during normal business hours.

        </center></h2></div>
        <div className='button4'><button class=" button4"><IoLogoWhatsapp/>Message us on whatssup</button></div>
        <div className='sap'><h2><center>SAPTOSI JEWELLERS</center></h2></div>
        <div className='address'><p><center>216, Cubbonpet Main Road, Cubbonpete, Nagarathpete, Bengaluru, Karnataka, India</center></p></div>
        <div className='hr'><p><center>HOURS</center></p></div>
        <div className='hr'><p><center> Open today 11:00 am – 09:30 pm<AiOutlineDown/>
        </center></p></div>
        <div className='googlemap'><img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" style={{width:"100%",height:"500%"}}/></div>
       <div> <button class="btn"><FaLocationArrow/>GET DIRECTIONS</button></div>
        <div className='connect'><h1><center>CONNECT WITH US</center></h1></div>

        <div className='icons' style={{size:"100px"}}><center><FaFacebook/>
        <FaInstagramSquare/>
        <TiSocialPinterestCircular/>
        <AiFillTwitterCircle/></center></div>
        <hr></hr>
        <div className='copy'><p>Copyright © 2022 SAPTOSI JEWELLERS - All Rights Reserved.</p></div>
        <div className='pow'><p>Powered by Ace Web Solution.</p></div>
   
    </div>
  )
}

export default Home
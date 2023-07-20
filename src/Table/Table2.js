import React from "react";
import './Signup.css'

import {RxCross2} from 'react-icons/rx';
import { useState } from "react";

const Table2 = () => {
  const [openPopup, setOpenPopup] = useState(null);
  const [ setIsLoginFormClose,isLoginFormClose,] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  function openForm(formName) {
    setOpenPopup(formName);
  }

  function closeForm() {
    setOpenPopup(null);
  }
  function openLoginForm() {
    setIsLoginFormOpen(true);
  }
  
 
  function closeLoginForm() {
    setIsLoginFormOpen(false);
  }



  function handleSignupFormSubmit(event) {
    event.preventDefault();
    console.log("Signup form submitted");
  }

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    console.log("Login form submitted");
  }

  return (
    <div>
      <h1>Table</h1>
      <div className="formcontainer">
         <button className="open-button" onClick={() => openForm("signup")}>
          Create Bid
        </button> 

         {openPopup === "signup" && (
          <div className="signup-form-popup">
            <form onSubmit={handleSignupFormSubmit}>
              <div className="container">
            <table className="customers">
            <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Contact</th>
          <th>Adresss</th>
          <th>Password</th>
          <th>Select</th>
          <th>sss</th>
          <th>rrr</th> 
          <th>
          <div className="logincontainer">
          <button className="open-button" onClick={openLoginForm}>
          Login
        </button>
        
        {isLoginFormOpen && (
          <div className="login-form-popup">
            <form className="form-container" onSubmit={handleLoginFormSubmit}>
              
              <label htmlFor="email">
                <b> Your Bid</b>
              </label>
              <input type="text" placeholder="Enter Your Bid Quantity" name="email" required />


              <button type="submit" className="btn">
                Submit
              </button>
              <button type="button" className="btn cancel" onClick={closeLoginForm}>
                Close
              </button>
            </form>
          </div>
        )}
      </div>
        </th>
          <th><RxCross2 color="red"  onClick={closeForm}/></th>
         
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>9</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      
      </div>
    
     </form>
    </div>
     )}  
    </div>
    </div> 



        
    
  );}


export default Table2;

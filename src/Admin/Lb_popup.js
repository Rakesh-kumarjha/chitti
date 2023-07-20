import React from "react";
import { useState } from "react";
import "./Loginbidpopup.css";



const  Lb_popup= () => {
  const [openPopup, setOpenPopup] = useState(null);

  function openForm(formName) {
    setOpenPopup(formName);
  }

  function closeForm() {
    setOpenPopup(null);
  }

  function handleSignupFormSubmit(event) {
    event.preventDefault();
    console.log("Signup form submitted");
  }


  return (
    <div>
      <div className="formcontainer">
        <button className="open-button" onClick={() => openForm("signup")}>
          Create Bid
        </button>
     
        {openPopup === "signup" && (
          <div className="signup-form-popup">
            <form onSubmit={handleSignupFormSubmit}>
              <div className="container">
                <label htmlFor="New Bid">
                  <b>Your Bid</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Bid Quantity"
                  name="New Bid"
                  required
                />

                <div className="clearfix">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={closeForm}
                  >
                    Cancel
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

export default Lb_popup;



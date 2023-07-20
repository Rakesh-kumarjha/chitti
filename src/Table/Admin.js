import React, { useState } from "react";
import "./Admin.css";
import { RxCross2 } from "react-icons/rx";
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';



const Admin = () => {
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

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    console.log("Login form submitted");
  }

  return (
    <>
    <div>
    <div>
      <div className="formcontainer">
        <button className="open-button" onClick={() => openForm("signup")}>
          Create Bid
        </button>
        <button className="open-button" onClick={() => openForm("login")}>
          End Bid
        </button>
        <div>
        <Link to="/profile"><button className="open-button" >
          Profile
        </button></Link></div>
        {openPopup === "signup" && (
          <div className="signup-form-popup">
            <form onSubmit={handleSignupFormSubmit}>
              <div className="container">
                <label htmlFor="New Bid">
                  <b>New Bid</b>
                </label>
                <input
                  type="text"
                  placeholder="New Bid"
                  name="New Bid"
                  required
                />

                <div className="dropdown">
                  <label htmlFor="New Bid">
                    <b>Select Request </b>
                  </label>
                  <input className="dropbtn" placeholder="select" />
                  <div className="dropdown-content">
                    <a href="#">With Remaining</a>
                    <a href="#">Without Remaining</a>
                  </div>
                </div>

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

      
      <div>
      <h1>Buyers </h1>

      <table className="customers">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Total Chitti</th>
          <th>Beeding</th>
          <th>Remaining Balance</th>
          <th> select </th>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>6</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>7</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>9</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
        <tr>
          <td>10</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td d-flex p-5 m-5>
            <button type="button" class="btn btn-success">
              Accept
            </button>
            <button type="button" class="btn btn-danger">
              Decline
            </button>
          </td>
        </tr>
      </table>
    </div>
    </div>
    </div>
    
    </>
  );
};

export default Admin;

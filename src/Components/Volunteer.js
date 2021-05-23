import React from "react"
import './Volunteer.css';

const Volunteer =()=>{
  return(

<div>
  <div className="form">
    <div className="form-group">
      <label htmlFor="name">full name</label>
      <input type="text" name="fullName" placeholder="enter your full name"/>
      </div>
    <div className="form-group">
      <label htmlFor="Email">Email</label>
      <input type="Email" name="Email"/>
    </div>
    <div className="form-group">
      <label htmlFor="PhoneNumber">Phone Number</label>
      <input type="PhoneNumber" name= "PhoneNumber"/>
    </div>
    <div className="form-group">
      <label htmlFor="Location">Location</label>
      <input type="Location" name= "Location"/>
    </div>
    <div className="form-group">
      <label htmlFor="Availability">Availability</label>
      <input type="text" name= "text"/>
    </div>
    <button type="submit">submit</button>




    
  </div>
</div>
  )
}
export default Volunteer
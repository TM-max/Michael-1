import React from "react"
import './PartnerWithUs.css'


const PartnerWithUs =()=>{
    return(
  
  <div>
      <header>Our partnership starts here</header>
      <div className="form">
    <div className="form-group">
      <label htmlFor="name">first name*</label>
      
       <input type="text" name="fullName" />
       
       
       <label htmlFor="name">Last name*</label>
       <input type="text" name="fullName" />
       
       
      </div>
    <div className="form-group">
      <label htmlFor="Email">Company Email*</label>
      <input type="Email" name="Email"/>
      <label htmlFor="Email">Phone Number*</label>
      <input type="PhoneNumber" name="PhoneNumber"/>
    </div>
    <div className="form-group">
      <label htmlFor="PhoneNumber">Anunal Contributions*</label>
      <input type="amount" name= "amount"/>
    </div>
    <div className="form-group">
      <label htmlFor="Location">States*</label>
      <input type="Location" name= "Location"/>
    </div>
    <h4 >How can WeHelp assist your fundraising needs *</h4>
    
    <button type="submit">submit</button>




    
  </div>
  </div>
    )
  }
  export default PartnerWithUs

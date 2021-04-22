import React, { useState } from "react";


function Form(props) {

  const {firstName, setFirstName} = props; 
  const {lastName, setLastName} = props;
  const {email, setEmail} = props;
  const {street, setStreet} = props;
  const {zip, setZip} = props; 
  const {city, setCity} = props;

  const submitButton = (event) => {
   event.preventDefault();
   window.confirm (`We received your order`);
}

  return (


    <form onSubmit={submitButton} className="form">
        <div className="form1">
        <div className="box">   
      <input 
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"/>
        </div>
        <div className="box">
       <input 
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"/>
        </div>
        <div className="box">
      <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"/>
        </div>
        <div className="box">
      <input 
        value={street}
        onChange={e => setStreet(e.target.value)}
        placeholder="Street"
        type="Street"
        name="Street"/>
        </div>
        <div className="box"> 
 <input 
        value={zip}
        onChange={e => setZip(e.target.value)}
        placeholder="Zip Code "
        type="Zip Code"
        name="Zip Code"/>
        </div>
        <div className="box">
      <input 
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="City "
        type="City"
        name="City"/>
</div>
      <button type="submit" >Submit</button>
      </div>
    </form>
  );
}
export default Form;
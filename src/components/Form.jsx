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
   window.confirm ("We received your order");
}

  return (


    <form onSubmit={submitButton} className="form">
        <div className="form1">
            
      <input 
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        
        />
       <input 
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
      />
      <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
       
      />
      <input 
        value={street}
        onChange={e => setStreet(e.target.value)}
        placeholder="Street"
        type="Street"
        name="Street"
       
      /> 
 <input 
        value={zip}
        onChange={e => setZip(e.target.value)}
        placeholder="Zip Code "
        type="Zip Code"
        name="Zip Code"
       
      />
      <input 
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="City "
        type="City"
        name="City"
       
      />

      <button type="submit" >Submit</button>
      </div>
    </form>
  );
}
export default Form;
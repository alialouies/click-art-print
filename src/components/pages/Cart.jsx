import React, { useState } from "react";
import Form from "../Form"

function Cart(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState(""); 
    return (
       <>
       <Form firstname={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}  email={email} setEmail={setEmail} street={street} setStreet={setStreet} zip={zip} setZip={setZip} city={city} setCity={setCity} />
       </>
    )
}

export default Cart
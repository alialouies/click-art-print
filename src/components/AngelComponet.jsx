import React from "react";

const DisplayDataAngel = ({dataAngel})=> {
return (
    dataAngel && (
<div className="first">
    <h1>{dataAngel.departmentId}</h1>
</div>
    )
); 
}; 

export default DisplayDataAngel; 
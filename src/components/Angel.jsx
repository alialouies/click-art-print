import React, {useEffect, useState} from "react"
import axios from "axios"; 
import DisplayDataAngel from "./AngelComponet"

function Angel() {
const [department, setDepartment] = useState("");

const getDataDepartment = () => {
    axios
    .get("https://collectionapi.metmuseum.org/public/collection/v1/departments")
    .then((response) => {
        console.log(response.data.departments[0].displayName); 
        setDepartment(response.data.departments[3].displayName); 
        
    })
}; 



useEffect (()=>{
    getDataDepartment();},[]
)

    return (
        <div>
            <p>10 Pictures Angel</p>
           <p> {department} </p> 
            <button type="button" onClick={getDataDepartment}>Get Data</button>

        </div>
    )
}

export default Angel

import React, {useEffect, useState} from "react"
import axios from "axios"; 
import DisplayDataAngel from "./AngelComponet"

function Angel() {
const [dataAngel, setDataAngel] = useState([]);

const getDataAngel = () => {
    axios
    .get("https://collectionapi.metmuseum.org/public/collection/v1/departments")
    .then((response) => {
        console.log(reponse); 
        return response.data
    })
    .then((data)=>setDataAngel(data[0])); 
}; 

useEffect (()=>{
    getDataAngel();},[]
)

    return (
        <div>
            <p>10 Pictures Angel</p>
            <>
            </>
            <button type="button" onClick={getDataAngel}>Get Data</button>

        </div>
    )
}

export default Angel

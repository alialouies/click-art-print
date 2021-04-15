import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Maya.css"

function Maya() {
    const [art, setArt] = useState(null);

    const artData = async () => {
      try {
      
        const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=eQKm0Vx6&involvedMaker=Maurice+Leroy");
        const artArray = [];
  
        res.data.artObjects.map((el) => artArray.push([el.webImage.url, el.title, el.principalOrFirstMaker ]));
        console.log(artArray)
        setArt(artArray);
  
       
      } catch (error) {
        console.log(error);
      }
    }; 
  
    useEffect(() => {
      artData();
    }, []);
  
    return (
      <div>
       {art &&
            art.slice(0,1).map((artItem, index) => {
          
              return (
                <div className="card" key={index}>
                <img src={artItem[0]} style={{ width: "50%" }} alt="" />
                <h1>Artist: {artItem[2]}</h1>  
                <p>Title: {artItem[1]}</p>
                </div>
              );
            })}
      </div>
    );
  }
  

export default Maya

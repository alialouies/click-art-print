import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/PrintArt.css"

function PrintArt() {
    const [art, setArt] = useState(null);
  
    const artData = async () => {
      try {
      
        const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=eQKm0Vx6&involvedMaker=Jean%20Baptiste%20Vanmour");
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
  

    const randomPrice = () => {
      let price = ["14.99", "19.99", "29.99", "24,99"];
      let random = price[Math.floor(Math.random() * price.length)];
      return random;
    
    }

    return (
      <div>
        <div className="card-container">
       {art &&
      //  art.slice(0, 5).map((artItem, index) => {
            art.map((artItem, index) => {
          
              return (
                <div className="card" key={index}>
                <img src={artItem[0]} style={{ width: "90%" }} alt="" />
                <h5>Artist: {artItem[2]}</h5>  
                <p>Title: {artItem[1]}</p>
                <h5>Price: {randomPrice()} €</h5>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  

export default PrintArt

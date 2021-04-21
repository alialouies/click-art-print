import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/PrintArt.css"

function Pictures() {
    const [art, setArt] = useState(null);
  
    const artData = async () => {
      try {
      
        const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=eQKm0Vx6&culture=en&involvedMaker=George%20Barbier&imgonly=True");
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
        <div className="intro">
          <h1>The Picture Art Collection</h1>
          <h2>featuring the amazing artist George Barbier</h2>
        </div>
        <div className="card-container">
       {art &&
      //  art.slice(0, 5).map((artItem, index) => {
            art.map((artItem, index) => {
          
              return (
                <div className="card" key={index}>
                  <div className="part2">
                    <img src={artItem[0]} alt="" style={{ width: "100%" }}  />
                  {/* </div> */}
                    <div className="test">
                    <h3>Artist: {artItem[2]}</h3>  
                    <h4>Title: {artItem[1]}</h4>
                    <h4 style={{color: "red"}}>Price: {randomPrice()} €</h4>
                    <a>add to cart  <i class="fas fa-shopping-cart"></i></a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }


export default Pictures
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/PrintArt.css"
import InitialTransition from "./animation";
function PrintArt(props) {
    const {addCart, price} = props;
    const [art, setArt] = useState(null);
  
    const artData = async () => {
      try {
      
        const res = await axios.get("https://www.rijksmuseum.nl/api/nl/collection?key=eQKm0Vx6&culture=en&involvedMaker=Charles%20Martin&f.dating.period=20&imgonly=True");
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
  

    // const randomPrice = () => {
    //   let price = ["14.99", "19.99", "29.99", "24,99"];
    //   let random = price[Math.floor(Math.random() * price.length)];
    //   return random;
    
    // }

    

    return (
      <>
      <InitialTransition />
      <div>
        <div className="intro">
          <h1>The Print Art Collection</h1>
          <h2>featuring french artist and illustrator Charles Martin (1884–1934)</h2>
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
                    <h4>Price: {price} €</h4>
                    <button onClick={(e) => addCart(artItem, e)}>
                      add to cart <i class="fas fa-shopping-cart"></i>
                    </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      </>
    );
  }
  

export default PrintArt


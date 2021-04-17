import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Search.css"




function PrintArtSearch(props) {
    const [art, setArt] = useState(null);
  const {query} = props
console.log(query)

    const artData = async () => {
      const searchparams = {key:'eQKm0Vx6',q:query,imgonly:true};
      try {
      
        const res = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?`, {params:searchparams});
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
    }, [query]);
  

    const randomPrice = () => {
      let price = ["14.99", "19.99", "29.99", "24,99"];
      let random = price[Math.floor(Math.random() * price.length)];
      return random;
    
    }

    return (
      <div>
        <div className="card-container">
       {art && art.map((artItem, index) => {
          
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
  

export default PrintArtSearch


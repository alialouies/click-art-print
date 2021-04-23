import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/PrintArt.css"

function Photography(props) {
  const {addCart, price} = props;
  const [data, setData] = useState([]);

  

  useEffect(() => {
    axios
      .get('https://www.rijksmuseum.nl/api/nl/collection?key=eQKm0Vx6&culture=en&involvedMaker=Friedrich%20Carel%20Hisgen&f.dating.period=19&imgonly=True')
      
      .then((response) => response.data)
      .then((data) => {
        const dataArray = [];
        data.artObjects.map((object) => dataArray.push([object.webImage.url, object.title, object.principalOrFirstMaker]))
        setData(dataArray);
        console.log(dataArray);
      });
  }, []);


  // const randomPrice = () => {
  //   let price = ["14.99", "19.99", "29.99", "24,99"];
  //   let random = price[Math.floor(Math.random() * price.length)];
  //   return random;
  // }

  


  return (
    <div>
      <div className="intro">
        <h1>The Photography collection</h1>
        <h2>featuring dutch photographer Friedrich Carel Hisgen</h2>
      </div>
      <div className="card-container">
     {data &&
    //  data.slice(0, 5).map((object, index) => {
          data.map((object, index) => {
        
            return (
              <div className="card" key={index}>
                <div className="part2">
                  <img src={object[0]} alt="" style={{ width: "100%" }}  />
                {/* </div> */}
                  <div className="test">
                  <h3>Artist: {object[2]}</h3>  
                  <h4>Title: {object[1]}</h4>
                  <h4 style={{color: "#FA1A05"}}>Price: {price} €</h4>
                  <button onClick={(e) => addCart(object, e)}>
                      add to cart <i class="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Photography;
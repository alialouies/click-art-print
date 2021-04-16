import React, {useEffect, useState} from "react"
import axios from "axios"; 


function PrintObject() {
    const [object, setObject] = useState(null);
  
    const objectData = async () => {
      try {
      
        const res = await axios.get("https://www.rijksmuseum.nl/en/search?p=1&ps=12&f.principalMakers.name.sort=George%20Barbier&st=Objects&ii=0");
        const objectArray = [];
  
        res.data.artObjects.map((el) => objectArray.push([el.webImage.url, el.title, el.principalOrFirstMaker ]));
        console.log(objectArray)
        setObject(objectArray);
  
       
      } catch (error) {
        console.log(error);
      }
    }; 
  
    useEffect(() => {
      objectData();
    }, []);

     const randomPrice = () => {
      let price = ["14.99", "19.99", "29.99", "24,99"];
      let random = price[Math.floor(Math.random() * price.length)];
      return random;
    
    }

    return (
      <div>
       {object &&
      //  art.slice(2, 12).map((artItem, index) => {
            object.map((artItem, index) => {
          
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
    );
  }
  

export default Angel

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Search.css";
import loader from "../img/loader.gif";

function ApiMet(props) {
  /* const [art, setArt] = useState(null); */
  const { query } = props;

  const [result, setResult] = useState(null);

  const artData = async () => {
    const searchparams = {
      q: query,
      showonly: "openAccess",
      material: "Oil",
    };

    try {
      const indexres = await axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?`,
        { params: searchparams }
      );
      let idArray = [...indexres.data.objectIDs];
      const tempArray = [];

      for (let i = 0; i <= 30; i++) {
        const apirequestid = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${idArray[i]}`
        );
        tempArray.push(apirequestid.data);
      }
      setResult(tempArray);

      console.log(result);
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
  };

  return (
    <div>
      <div className="card-container">
        {result &&
          result.map((resultItem, index) => {
            return (
              <div className="card" key={index}>
                <div className="presult2">
                  <img
                    src={resultItem.primaryImageSmall}
                    alt=""
                    style={{ width: "100%" }}
                  />
                  {/* </div> */}
                  <div className="test">
                    <h3> {resultItem.title}</h3>

                    <h4>By {resultItem.artistDisplayName}</h4>
                    <h4 style={{ color: "red" }}>Price: {randomPrice()} €</h4>
                    <a>
                      add to cart <i class="fas fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ApiMet;

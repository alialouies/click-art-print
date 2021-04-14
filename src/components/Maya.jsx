import React, { useState, useEffect } from "react";
import axios from "axios";



  // we display only 10 items, and appear on clicking of category button
function Maya() {
    // const [artTitle, setArtTitle] = useState("");
    // const [artMaker, setArtMaker] = useState("");
    // const [artImage, setArtImage] = useState("");
    // https://www.rijksmuseum.nl/api/nl/collection?key=eQKm0Vx6&culture=en&involvedMaker=Charles%20Martin&f.dating.period=20&imgonly=True

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.rijksmuseum.nl/api/nl/collection?key=eQKm0Vx6&culture=en&involvedMaker=Charles%20Martin&f.dating.period=20&imgonly=True"
            )
            .then((res) => res.data)
            .then((data) => {
                setData(data);
                console.log(data);
            // .catch((err) => {
            //   console.error(err.response.data);
            });
      }, []);


    return (
        <>
        
            {data.map((item) => {
            <div>
                <img src={item.artObjects.webImage.url} style={{ width: "200px" }} />
                <div>
                <h4>{item.artObjects.title} </h4>
                </div>
                <div>
                <p>{item.artObjects.principalOrFirstMaker} </p>
                </div>
            </div>
        })}
       
        </>
    )
}

export default Maya

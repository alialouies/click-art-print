import React from 'react'

function Cart(props) {
    const {cart} = props;

    return (
       <>
       {cart && cart.map((product, index) => {
          return (
            <div className="card" key={index}>
                <div className="part2">
                  <img src={product[0]} alt="" style={{ width: "100%" }} />
                  <div className="test">
                    <h3>Artist: {product[2]}</h3>
                    <h4>Title: {product[1]}</h4>
                  </div>
                </div>
              </div>
         )
       } )}
       
       </>
    )
}

export default Cart
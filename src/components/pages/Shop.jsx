import React from 'react'
import ShopHeader from '../ShopHeader'
import Categories from '../Categories'

function Shop(props) {
    const {addCart, price} = props;
    
    return (
        <>
        <ShopHeader/>
        <Categories addCart={addCart} price={price}/>
        </>
    )
}

export default Shop
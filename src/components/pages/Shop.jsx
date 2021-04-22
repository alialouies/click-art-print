import React from 'react'
import ShopHeader from '../ShopHeader'
import Categories from '../Categories'

function Shop(props) {
    const {addCart} = props;
    
    return (
        <>
        <ShopHeader/>
        <Categories addCart={addCart}/>
        </>
    )
}

export default Shop
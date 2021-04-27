import React, {useState} from 'react'
import PrintArtSearch from './PrintArtSearch.jsx'
import Search from './Search'
import "../css/Search.css"


function KeySearch(props) {
    const {price, addCart } = props;
    const [query, setQuery] = useState("")
    return (
        <div>
            <br></br>
            <Search setQuery={setQuery} query={query} addCart={addCart}/>
            <PrintArtSearch query={query} addCart={addCart} price={price}/>
    
        </div>
    )
}

export default KeySearch




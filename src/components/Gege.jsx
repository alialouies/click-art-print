import React, {useState} from 'react'
import PrintArtSearch from './PrintArtSearch.jsx'
import Search from './Search'
import "../css/Search.css"


function Gege() {
    const [query, setQuery] = useState("")
    return (
        <div>
            <br></br>
            <Search setQuery={setQuery} query={query}/>
            <PrintArtSearch query={query} />
    
        </div>
    )
}

export default Gege




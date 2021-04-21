import React, {useState} from 'react'
import PrintArtSearch from './PrintArtSearch.jsx'
import Search from './Search'
import "../css/Search.css"


function KeySearch() {
    const [query, setQuery] = useState("")
    return (
        <div>
            <br></br>
      p      <Search setQuery={setQuery} query={query}/>
            <PrintArtSearch query={query} />
    
        </div>
    )
}

export default KeySearch




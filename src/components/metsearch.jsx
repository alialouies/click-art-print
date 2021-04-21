import React, {useState} from 'react'
import ApiMet from './ApiMet.jsx'
import Search from './Search'
import "../css/Search.css"


function MetSearch() {
    const [query, setQuery] = useState("")
    return (
        <div>
            <br></br>
            <Search setQuery={setQuery} query={query}/>
            <ApiMet query={query} />
    
        </div>
    )
}

export default MetSearch




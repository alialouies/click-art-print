import React, {useState} from 'react'
import PrintArt from './PrintArt'
import Search from './Search'


function Gege() {
    const [query, setQuery] = useState("")
    return (
        <div>
            <br></br>
            <Search setQuery={setQuery} query={query}/>
            <PrintArt query={query} />
    
        </div>
    )
}

export default Gege




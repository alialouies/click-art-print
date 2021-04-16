import React from 'react'
import "../css/Button.css"

function Search(props) {
    const { setQuery, query } = props;
    /* console.log (query) */


    return (
      <div className= "search">
        <input
          value={query}
          type="text"
          placeholder="Type here..."
          onChange={ (event) => setQuery(event.target.value) }
        />
      </div>
      
    ); 
  } 
  


export default Search
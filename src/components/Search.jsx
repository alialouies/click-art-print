import React from 'react'

function Search(props) {
    const { setQuery, query } = props;
    /* console.log (query) */


    return (
      <div>
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
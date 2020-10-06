import React, { useState } from 'react';

function SearchUser({search}) {
    const [searchValue,setSearchValue]=useState('')

    const handleSearch = (e) =>{
      e.preventDefault()
      search(searchValue)
      setSearchValue('')
    }

    return (
        <form className='search' onSubmit={handleSearch}>
           <input type='text' placeholder='Search User ...' className='form-control' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/> 
        </form>
    );
}

export default SearchUser;
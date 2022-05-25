import React from 'react'

import './App.css';
import Rat from './Rat';

const Search = ({text,handleChange,rating,handleRating}) => {
  return (
      <div className='header-container'>
          <h1> Our movie app</h1>
          <div className='search-container'> 
              <form action=''>
                  <input classeName='inp' type='text' value={text} onChange={handleChange}/>
                 <Rat rating={rating} handleRating={handleRating}/> 
              </form>
          </div>
      </div>
  )
}

export default Search
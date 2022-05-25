import React from 'react'
import Rat from './Rat'

const MovieCard = ({el}) => {
  return (
    <div className="movie-card">
        <h1>{el.title}</h1>
        <Rat rating={el.rating}/>
        <h1> {el.description}</h1>
       <h1> {el.date}</h1>
        <img src={el.posterURL} width={'30%'} alt=""/>
       
    </div>
  )
}

export default MovieCard
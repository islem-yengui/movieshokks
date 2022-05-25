import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({movies}) => {
    console.log(movies)
  return (
    <div className="movie-list">
        {
            movies.map((el,i)=>(
               <MovieCard key={i} el={el} />
            ) )
        }
    </div>
  );
};

export default MovieList
import React from 'react'
import { Link } from 'react-router-dom';
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
        {/* <h2>Movies List</h2>
        <Link to="/Details">Go to Details</Link> */}
    </div>
  );
};

export default MovieList
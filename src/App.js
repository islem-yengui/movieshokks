// import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Rat from './Rat';
import Search from './Search';
import Addmovies from './Addmovies';

function App() {
  const data = [
  
    { 
      id:Math.random(),
      title : 'The Holiday ' ,
      description :' Comedies' ,
      posterURL :'https://media.senscritique.com/media/000019851249/300/the_holiday.jpg',
      rating: 4,
      date:'April 2018'
  
    },
    {
      id:Math.random(),
      title : 'Love like You',
      description :'Romantic Dramas',
      posterURL :'https://images.moviefit.me/t/o/98786-the-love-is-similar-to-you.jpg',
      rating: 5,
      date:'April 2019'
    },
    {
      id:Math.random(),
      title : 'Lucy',
      description :'Action',
      posterURL :'https://www.horreur.net/sites/default/files/upload/lucy-poster-scarlett-besson_0.jpg',
      rating: 3,
      date:'April 2020'
      
    },
    {
      id:Math.random(),
      title : 'Cindrella',
      description :'Romantic , Dramas',
      posterURL :'https://fr.web.img3.acsta.net/pictures/21/08/05/10/12/2715417.jpg',
      rating: 3,
      date:'April 2021'
      
    },
    {
      id:Math.random(),
      title : 'The good doctor',
      description :'Drama',
      posterURL :'https://m.media-amazon.com/images/I/71-RSs99XQL._SL1024_.jpg',
      rating: 2,
      date:'April 2015'
      
    },
    {
      id:Math.random(),
      title : 'Squid game',
      description :'Action',
      posterURL :'https://www.pressegauche.org/IMG/arton50108.jpg',
      rating: 5,
      date:'April 2021'
      
    },
    {
      id:Math.random(),
      title : 'The boss baby',
      description :'Kids Tv',
      posterURL :'https://fr.web.img4.acsta.net/pictures/17/01/19/10/11/597368.jpg',
      rating: 3,
      date:'April 2020'
      
    },
  
  ]
  const [movies, setMovies] = useState(data)
  const [text, setText] = useState('')
  const handleChange=(e)=>setText(e.target.value)
  const [rating, setRating] = useState(1)
  const handleRating=(x)=>setRating(x)
  const handleAdd=(newMovie)=>setMovies([...movies,newMovie])
  return (
    <div className="App">
    <Search handleRating={handleRating} rating={rating} text={text} handleChange={handleChange}/>
      <MovieList  movies={movies.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())
        &&el.rating>=rating)}  />
     <Rat/>
     
     <Addmovies add={handleAdd}/>
    </div>
  );
}

export default App;

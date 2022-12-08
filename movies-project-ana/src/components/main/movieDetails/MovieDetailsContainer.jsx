import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import MovieDetail from './MovieDetail';

const MovieDetailsContainer = () => {
    let key_movie = process.env.REACT_APP_MOVIES_KEY;
    const {id} = useParams();
    console.log("id",id)
    const [movie,setMovie] = useState([]);
    useEffect(() => {
      axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key_movie}&language=en-US`)
      .then(res=>setMovie(res.data))
   }, [])
    
  //return <MovieDetail movie={movie} />
return(
  <>
  <Header />
  <main>
   <MovieDetail movie={movie} />
  </main>
  <Footer/>
</>
)


}

export default MovieDetailsContainer
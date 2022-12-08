import React from 'react'
import Movie from './Movie'

const MoviesList = ({movies}) => {
    //console.log("ListProducts",movies)
  return movies.map((movies,key) =>(
    <Movie movie={movies} key={key} />
  ));
}

export default MoviesList
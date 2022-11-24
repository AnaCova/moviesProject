import React from 'react'
import Movie from './Movie'

const MoviesList = ({products}) => {
    console.log("ListProducts",products)
  return products.map((product,key) =>(
    <Movie product = {product} key = {key} />
  ));
}

export default MoviesList
import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesList from "./MoviesList";

const MoviesListContainer = () => {
  //const [movies, setMovies] = useState([]);

  let key = process.env.REACT_APP_MOVIES_KEY;
  console.log("Key", key);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
      .then((res) => setProducts(res.data.results));
  }, []);

  //console.log("Productos", products)

  return <MoviesList products={products} />;
};

export default MoviesListContainer;

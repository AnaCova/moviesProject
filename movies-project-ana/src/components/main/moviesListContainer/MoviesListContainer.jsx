import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesList from "./MoviesList";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Search from "../search/Search"
const MoviesListContainer = () => {
  const [movies, setMovies] = useState([]);

  let key = process.env.REACT_APP_MOVIES_KEY;
  //console.log("Key", key);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
      .then((res) => setMovies(res.data.results));
  }, []);

  console.log("List",movies)

/*   return <MoviesList movies={movies} />; */

return(
  <>
<Header />
<main>
  <Search/>
<MoviesList movies={movies} />
</main>
<Footer/>
</>
)
};

export default MoviesListContainer;

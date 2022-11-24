import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="movie_container">
      <article className="movie_poster">
        <img src={"https://image.tmdb.org/t/p/w500"+product.poster_path}/>
        <h3>{product.title}</h3>
      </article>
    </Link>
  );
};

export default Movie;

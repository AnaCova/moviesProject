import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {

  return (
<>
<Link to={`/movie/${movie.id}`} className="media_container">
      <article className="media_poster">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt="movie"
        />
        <label className="media_title" >{movie.title}</label>
      </article>
    </Link>
    </>
  );



};

export default Movie;

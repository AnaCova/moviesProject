import React from "react";
import { Link } from "react-router-dom";

const Series = ({ serie }) => {
  return (
    <Link to={`/series/${serie.id}`} className="media_container">
      <article className="media_poster">
        <img
          src={"https://image.tmdb.org/t/p/w500" + serie.poster_path}
          alt="serie"
        />
        <label className="media_title">{serie.original_name}</label>
      </article>
    </Link>
  );
};

export default Series;

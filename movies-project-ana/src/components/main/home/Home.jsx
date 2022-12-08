import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({media}) => {
    console.log("Media",media)
  return (
    <Link to={`/movie/${media.id}`} className="home_container" >
        <article className='media_poster'>
            <img src={"https://image.tmdb.org/t/p/w500" + media.poster_path} alt="media" />
            <label>{media.title}</label>
        </article>
    </Link>
  )
}

export default Home
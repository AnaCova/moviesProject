import React from 'react'
import {Outlet} from "react-router-dom"
import MoviesListContainer from './moviesListContainer/MoviesListContainer'

const Main = () => {
  return (
    <>
{/*       <Outlet/> */}
<MoviesListContainer/>
    </>
  )
}

export default Main
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SeriesList from './SeriesList';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Search from '../search/Search'

const SeriesListContainer = () => {
    let key_series = process.env.REACT_APP_MOVIES_KEY
    const [series,setSeries] =useState([]);

    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/tv/popular?api_key=${key_series}&language=en-US&page=1`)
        .then(res=>setSeries(res.data.results));
    },[])

    console.log("Series",series)

  //return <SeriesList series = {series}/>

  return(
    <>
    <Header />
    <main>
      <Search/>
    <SeriesList series = {series}/>
    </main>
    <Footer/>
  </>
  )

}

export default SeriesListContainer
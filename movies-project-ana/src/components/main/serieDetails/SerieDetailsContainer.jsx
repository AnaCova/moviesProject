import SerieDetail from './SerieDetail';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';


const SerieDetailsContainer = () => {

    let key_serie = process.env.REACT_APP_MOVIES_KEY
    const {id} = useParams();
    //console.log("id",id)

    const [serie,setserie] = useState([]);

    useEffect(() => {
      axios
      .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${key_serie}&language=en-US`)
      .then(res=>setserie(res.data))
   }, [])

   console.log("SerieData", serie)

    
  //return <SerieDetail serie = {serie}/>
  return(
    <>
    <Header />
    <main>
    <SerieDetail serie = {serie}/>
    </main>
    <Footer/>
  </>
  )
  
}

export default SerieDetailsContainer
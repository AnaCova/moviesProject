import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HomeList from './HomeList';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Search from '../search/Search'



const HomeListContainer = () => {
    let key_media = process.env.REACT_APP_MOVIES_KEY;
    //console.log("key media",key_media)
    
    const [media,setMedia] = useState([])
    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${key_media}`)
        .then((res)=> setMedia(res.data.results))
    },[])

    //console.log("Media",media)

  /* return <HomeList media = {media}/> */
  return(
    <>
    <Header />
    <main>
      <Search/>
     <HomeList media = {media}/>
    </main>
    <Footer/>
  </>
  )
}

export default HomeListContainer
import React from 'react'
import Home from './Home'

const HomeList = ({media}) => {
    //console.log("MEDIA",media)
  return media.map((media,key)=>(
    <Home media={media} key={key}/>
  ))
}

export default HomeList
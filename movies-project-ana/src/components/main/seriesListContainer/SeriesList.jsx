import React from 'react'
import Series from './Series'


const SeriesList = ({series}) => {
  //console.log("Series",series)
  return series.map((serie,key) => (
    <Series serie = {serie} key = {key}/>
  ));

}

export default SeriesList

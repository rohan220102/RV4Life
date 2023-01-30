import Card from './Card.js'
import { useState } from 'react'

const Results = ({results}) => {
  return (
    <>
    {results.map(({title, rating, detour, visited, temp, selected}, index) => (
    <Card key={index} title={title} rating={rating} detour={detour} visited={visited} temp={temp} selected={selected}></Card>))}
    </>
  )
}

export default Results;

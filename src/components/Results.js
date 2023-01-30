import Card from './Card.js'
import { useState } from 'react'

const Results = ({results, onSelect}) => {
  return (
    <>
    {results.map(({title, rating, detour, visited, temp, selected}, index) => (
    <Card key={index} title={title} rating={rating} detour={detour} visited={visited} temp={temp} id={index} selected={selected} onSelect={onSelect}></Card>))}
    </>
  )
}

export default Results

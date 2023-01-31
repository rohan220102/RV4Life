import Card from './Card.js'
import { useState } from 'react'

const Results = ({results, onSelect, onAdd}) => {
  return (
    <>
    {results.map(({id, title, rating, detour, visited, temp, selected}) => (
    <Card key={id} title={title} rating={rating} detour={detour} visited=
    {visited} temp={temp} id={id} selected={selected} onSelect={onSelect}
    onAdd={onAdd}></Card>))}
    </>
  )
}

export default Results

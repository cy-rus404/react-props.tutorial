import React from 'react'
import "./App.css"

function Tweet(props) {
  return (
    <div className='tweet'>
        <h1>{props.name}</h1>
        <p>{props.message}</p>
        <h3>{props.number}</h3>
      
    </div>
  )
}

export default Tweet

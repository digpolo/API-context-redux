import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Link to={'/detail/' + item.id}>
        <h4>{item.name}</h4>
        
        <img src={item.image} alt="" />
      </Link>
      <button>⭐</button>
     
    </div>
  )
}

export default Card
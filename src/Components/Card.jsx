import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { useCharStates } from '../Context/Context'

const Card = ({item}) => {

  const {favs, dispatch} = useCharStates()

  const findFav = favs.find((fav) => fav.id == item.id)

  const addFav = () => {
    if(findFav){
      Swal.fire('Ese personaje ya está agregado a favoritos')
    } else {
      toast('Se agregó nuevo personaje a favoritos ⭐',  {
        position: "bottom-right",
        theme: "dark",
    })
      dispatch({type: 'ADD_FAV', payload: item})
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Link to={'/detail/' + item.id}>
        <h4>{item.name}</h4>
        <img src={item.image} alt="" />
      </Link>
      <button onClick={addFav}>{findFav ? '🌟' : '⭐'}</button>
    </div>
  )
}

export default Card
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const Detail = () => {

  const [character, setCharacter] = useState({})
  const { id } = useParams()
  console.log(character)
  const url = 'https://rickandmortyapi.com/api/character/' + id
  // const url = ''
  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        toast('Ese personaje si existe',  {
          position: "bottom-right",
          theme: "dark",
        })
        const res = await axios(url)
        setCharacter(res.data)
      } catch (err) {
        Swal.fire({
          title: 'Oops!...',
          text: 'Ese personaje no existe',
          icon: 'error',
          footer: err
        })
      }
    }
    fetchCharacter()
  }, [])
  
  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt="" />
      <h1>{character.location?.name}</h1>
      <h3>{character.status}</h3>
    </div>
  )
}

export default Detail
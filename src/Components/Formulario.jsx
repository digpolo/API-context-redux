import React from 'react'
import { useState } from 'react'
import useInput from '../Clase 17/UseInput'

const Formulario = () => {

    const name = useInput('text')
    const age = useInput('number')
    const pass = useInput('password')

  return ( 
    <div>
        <label >Nombre: </label>
        <input {...name}/>
        <label >Edad: </label>
        <input {...age}/>
        <label >Contraseña: </label> 
        <input {...pass}/>
        <button>Enviar</button>
    </div>
  )
}

export default Formulario
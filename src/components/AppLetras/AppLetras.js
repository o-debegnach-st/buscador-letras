import React, { useContext, useEffect } from 'react'
import { StateContext } from '../../context/StateContext'
import Formulario from '../Formulario/Formulario'
import Letra from '../Letra/Letra'
import LoadScreen from '../LoadScreen'

const AppLetras = () => {
	const [isLoading] = useContext(StateContext)
  
  useEffect(() => console.log(isLoading), [isLoading])

  return (
    <>
      <Formulario />
      <Letra />
      {isLoading && <LoadScreen />}
    </>
  )
}

export default AppLetras
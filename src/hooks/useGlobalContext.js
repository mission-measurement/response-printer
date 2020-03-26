import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const useGlobalContext = () => {
  const [state, setState] = useContext(GlobalContext)
  return state
}

export default useGlobalContext

import React, { useContext } from 'react'
import { ResponseContext } from '../context/ResponseContext'

const useResponseContext = () => {
  const [state, setState] = useContext(ResponseContext)
  return state
}

export default useResponseContext

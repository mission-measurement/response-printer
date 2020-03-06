import React from 'react'

const ResponseContext = React.createContext([[], () => {}])

const ResponseContextProvider = (props) => {
  return (
    <ResponseContext.Provider value={props.value}>
      {props.children}
    </ResponseContext.Provider>
  )
}

export {ResponseContext, ResponseContextProvider}

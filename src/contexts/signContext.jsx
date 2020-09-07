import React, { useEffect, useState, createContext } from 'react'

export const SignContext = createContext()

export const SignProvider = (props) => {
  const [sign, setSign] = useState(true)

  return (
    <SignContext.Provider value={[sign, setSign]}>
      { props.children }
    </SignContext.Provider>
  )
}
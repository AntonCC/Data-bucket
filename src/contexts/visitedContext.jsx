import React, { useEffect, useState, createContext } from 'react'
import useIntro from '../hooks/useIntro'

export const VisitedContext = createContext()

export const VisitedProvider = (props) => {
  const [visited, setVisited] = useState(false)
  const showAnimation = useIntro()

  useEffect(() => {
    setVisited(showAnimation)
  }, [showAnimation])

  return (
    <VisitedContext.Provider value={[visited, setVisited]}>
      {props.children}
    </VisitedContext.Provider>
  )
}
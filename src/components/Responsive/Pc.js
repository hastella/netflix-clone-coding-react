import React from "react"
import { useMediaQuery } from "react-responsive"

const Pc = ({ children }) => {

  const isPc = useMediaQuery({
    query: "(min-width:769px)"
  });

  return <>{isPc && children}</>
}

export default Pc
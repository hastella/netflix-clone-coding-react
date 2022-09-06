import React from "react"
import { useMediaQuery } from "react-responsive"

const Mobile = ({ children }) => {

  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });

  return <>{isMobile && children}</>
}

export default Mobile
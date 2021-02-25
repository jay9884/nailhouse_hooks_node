import React from "react"
import { useMediaQuery } from "react-responsive"

const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:768px)"
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>
}

const Tablet = ({children}) => {
  const isTablet = useMediaQuery({
    query : "(min-width:769px) and (max-width:1024px)"
  });
  return <React.Fragment>{isTablet && children}</React.Fragment>
}


const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:1025px) "
  });
  return <React.Fragment>{isPc && children}</React.Fragment>
}

export  {Mobile, Tablet, PC};
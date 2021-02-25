import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Login from './Login'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: ${props => props.width};
`

export default (() => {
  const [mobileSize, setMobileSize] = useState(false)

  const handleResize = () => {
    if(window.innerWidth < 360) {
      setMobileSize(true)
    } else {
      setMobileSize(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <Container width={mobileSize ? "100%" : "360px"}>
        <Login />
      </Container>
    </div>
  )
})
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

import SignUp from './SignUp'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
`
const LogoDiv = styled.div`
  width: 88px;
  height: 31px;
  padding-top: 40px;
`

const LogoImg = styled.img`
  width: 100%;
  height: auto;
`

export default (() =>{
  const [mobileSize, setMobileSize] = useState(false)

  const handleResize = () => {
    if(window.innerWidth < 768) {
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
      <>
      <div className="container">
        <LogoDiv>
          <Link to="/">
            <LogoImg src="/logo.svg" alt="내일의 집"/>
          </Link>
        </LogoDiv>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div style={{display: "flex", justifyContent: "center"}}>
              <Container width={mobileSize ? "100%" : "360px"}>
                <SignUp />
              </Container>
            </div>
          </div>
        </div>
      </div>
      </>
    )
})
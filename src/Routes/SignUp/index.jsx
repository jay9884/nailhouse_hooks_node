import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

import SignUp from './SignUp'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const LogoDiv = styled.div`
  width: 88px;
  height: 31px;
  margin: 40px 0 0 60px;
`

const LogoImg = styled.img`
  width: 100%;
  height: auto;
`

export default (() =>(
    <>
    <LogoDiv>
      <Link to="/">
        <LogoImg src="/logo.svg" alt="내일의 집"/>
      </Link>
      </LogoDiv>
    <Container>
      <SignUp />
    </Container>
  </>
))
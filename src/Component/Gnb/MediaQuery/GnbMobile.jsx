import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { HoverIconDiv } from '../../TagStyle/HoverIconDiv'
import HoverIcon from '../../TagStyle/HoverIcon'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`

const LeftButton = styled.button`
  border: none;
  color: #35c5f0;
  background-color: inherit;
  font-size: 35px;
  cursor: pointer;
`

const RigthButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

const GnbMobile = () => {
  return (
    <Container>
      <LeftButton>≡</LeftButton>
      <Link to="/">
        <div style={{width: 80+"px", height: 21+"px"}}>
          <img src="/logo.svg" alt="내일의 집"
               style={{width: 100+"%", height: "auto"}}/>
        </div>
      </Link>
      <RigthButtons>
        <HoverIconDiv>
          <HoverIcon icon="search" 
                size={24} />
        </HoverIconDiv>
        <HoverIconDiv>
          <HoverIcon icon="cart" 
                size={24} />
        </HoverIconDiv>
      </RigthButtons>
    </Container>
  )
}

export default GnbMobile
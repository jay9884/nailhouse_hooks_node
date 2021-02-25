import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { HoverIconDiv } from '../../TagStyle/HoverIconDiv'
import HoverIcon from '../../TagStyle/HoverIcon'

const UnauthorizedSpan = styled.span`
  padding: 0 8px;
  color: #858896;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-weight: 700;

  :hover {
    color: #3DA8F5;
  }
`

const Unauthorized = () => {
  return(
    <>
    <HoverIconDiv style={{marginRight: 16+"px", marginLeft: 16+"px"}}>
      <HoverIcon icon="cart" 
            size={24} />
    </HoverIconDiv>
    <UnauthorizedSpan style={{borderRight: "1px solid #E0E2E7"}}>
      <Link to="/login">로그인</Link>
    </UnauthorizedSpan>
    <UnauthorizedSpan>
      <Link to="/signup">회원가입</Link>
    </UnauthorizedSpan>
    </>
  )
}

export default Unauthorized
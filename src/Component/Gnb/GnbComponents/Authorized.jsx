import React from 'react'
import styled from 'styled-components'
import { HoverIconDiv } from '../../TagStyle/HoverIconDiv'
import HoverIcon from '../../TagStyle/HoverIcon'
import UserProfile from './UserProfile'

const Authorized = () => {
  return(
    <>
    <HoverIconDiv style={{marginRight: 16+"px", marginLeft: 16+"px"}}>
      <HoverIcon icon="bookmark" 
            size={24} />
    </HoverIconDiv>
    <HoverIconDiv style={{marginRight: 16+"px"}}>
      <HoverIcon icon="bell" 
            size={24} />
    </HoverIconDiv>
    <HoverIconDiv style={{marginRight: 16+"px"}}>
      <HoverIcon icon="cart" 
            size={24} />
    </HoverIconDiv>
    <UserProfile />
    </>
  )
}

export default Authorized
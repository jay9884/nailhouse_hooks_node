import React, { useState } from 'react'
import styled from 'styled-components'
import UserProfileDropDown from './UserProfileDropDown'

const Container = styled.div`
  position: relative;
`

const UserProfileButton = styled.button`
  width: 32px;
  height: 32px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-image: url("/assets/icon-default-user.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  :hover{
    border: 2px solid #3DA8F5;
  }
`

const UserProfile = () => {
  const [clicked, setClicked] = useState(false)
  
  const handleOnClick = () => {
    setClicked(true)
  }

  return(
    <Container>
      <UserProfileButton 
        onClick={handleOnClick}/>
      {clicked && (
        <UserProfileDropDown />
      )}
    </Container>
  )
}

export default UserProfile
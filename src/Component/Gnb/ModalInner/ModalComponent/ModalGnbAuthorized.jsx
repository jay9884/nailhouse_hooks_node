import React from 'react'
import styled from 'styled-components'
import UserProfile from '../../GnbComponents/UserProfile'

const Container = styled.div`
  margin: 30px 10px;
`

const ModalGnbAuthorized = () => {
  return ( 
    <Container>
      <UserProfile isMobile={true}/>
    </Container>
  )
}

export default ModalGnbAuthorized
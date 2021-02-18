import React from 'react'
import styled from 'styled-components'
import Login from './Login'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export default (() => {
  return (
    <Container>
      <Login />
    </Container>
  )
})
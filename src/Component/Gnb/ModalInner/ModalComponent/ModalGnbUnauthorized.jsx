import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Button } from '../../../TagStyle/Button'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;

  @media screen and (min-width : 362px) and (max-width: 514px) {
    width: 100%;
  }

  @media screen and (max-width: 361px) {
    width: 202px;
  }
`

const Item = styled.div`
  width: 100%;
  margin: 0 5px;
`

const ModalGnbUnauthorized = () => {
  return ( 
    <Container>
      <Items>
        <Item>
          <Link to="/login">
            <Button reverse>로그인</Button>
          </Link>
        </Item>
        <Item>
          <Link to="/signup">
            <Button>회원가입</Button>
          </Link>
        </Item>
      </Items>
    </Container>
  )
}

export default ModalGnbUnauthorized
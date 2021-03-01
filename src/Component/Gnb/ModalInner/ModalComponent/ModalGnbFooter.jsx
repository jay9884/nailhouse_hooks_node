import React from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 18px;
`

const Items = styled.li`
  display: block;
  padding: 2px 8px;
  color: #757575;
  font-size: 11px;
  line-height: 15px;
  border-left: 1px solid #E0E2E7;
  cursor: pointer;

  :first-child {
    border-left: none;
  }
`

const ModalGnbFooter = () => {
  const token = localStorage.getItem('authorization')

  const handleOnClick = () => {
    localStorage.removeItem('authorization')
    window.location.replace('/')
  }

  return(
    <Container>
      <Items>전문가 신청</Items>
      <Items>판매자 신청</Items>
      {token 
        ? <Items onClick={handleOnClick}>로그아웃</Items> 
        : null
      }
    </Container>
  )
}

export default ModalGnbFooter
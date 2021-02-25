import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  position: absolute;
  left: -84px;
  top: calc(100% + 12px);
  z-index: 2;
  display: block;
  width: 200px;
  max-height: 272px;
  padding: 8px 8px 8px 8px;
  border: 1px solid #E0E2E7;
  border-radius: 4px;
  transition: border-color 200ms ease-in, padding 200ms ease-in,
          max-height 200ms ease-in, box-shadow 200ms ease-in;

  ::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    border-top:0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 16px solid #E0E2E7;
  }

  ::after {
    content: "";
    position: absolute;
    z-index: 3;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 16px solid #ffffff;
  }
`

const Items = styled.li`
  padding: 10px 12px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  font-weight: 400;
  cursor: pointer;

  :hover {
    background-color: #F7F8FA;
  }
`

const UserProfileDropDown = () => {
  const handleOnClick = () => {
    localStorage.removeItem('authorization')
    window.location.replace('/')
  }

  return(
    <Container>
      <Items>마이페이지</Items>
      <Items>나의 쇼핑</Items>
      <Items>이벤트</Items>
      <Items
        onClick={handleOnClick}>로그아웃</Items>
    </Container>
  )
}

export default UserProfileDropDown
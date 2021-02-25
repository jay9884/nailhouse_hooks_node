import React from 'react'
import styled from 'styled-components'

const NavMenuUl = styled.ul`
  display: flex;
`

const NavMenuLi = styled.li`
  margin-right: 32px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-weight: 700;
  cursor: pointer;

  :last-child {
    margin-right: 0;
  }

  :hover {
    color: #3DA8F5;
  }
`

const NavMenu = () => (
  <NavMenuUl>
    <NavMenuLi>커뮤니티</NavMenuLi>
    <NavMenuLi>스토어</NavMenuLi>
    <NavMenuLi>인테리어시공</NavMenuLi>
  </NavMenuUl>
)

export default NavMenu
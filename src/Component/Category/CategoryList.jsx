import React from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  overflow: auto;
  overflow-y: hidden;

  webkit-scrollbar

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: #ced4da;

    :hover {
      background-color: #adb5bd;
    }
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  @media screen and (min-width : 768px) {
    height: 50px;
  }
`

const Items = styled.li`
  display: inline-block;
  margin: 6px 4px;
  padding: 8px 4px 7px;
  color: #424242;
  font-size: 13px;
  line-height: 1;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;

  :hover {
    color: #3DA8F5;
  }

  @media screen and (min-width : 768px) {
    font-size: 15px;
    line-height: 23px;
    margin: 8px 4px;
    padding: 6px 8px 4px;
  }
`

const CategoryList = () => {
  return (
    <Container>
      <Items>스토어</Items>
      <Items>홈카테고리</Items>
      <Items>신혼가구</Items>
      <Items>베스트</Items>
      <Items>오늘의딜</Items>
      <Items>연휴특가</Items>
      <Items>월동준비</Items>
      <Items>리퍼마켓</Items>
      <Items>기획전</Items>
    </Container>
  )
}

export default CategoryList
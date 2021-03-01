import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '../../../TagStyle/Icon'

const Container = styled.div`
  border-top: 1px solid #E0E2E7;
`

const TitleButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 10px 15px 40px;
  border: none;
  background-color: #ffffff;
`

const Title = styled.h1`
  color: #424242;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
`

const UlContainer = styled.ul`
  padding-bottom: 20px;
`

const Items = styled.li`
  padding: 7px 10px;
  color: #424242;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`

const ModalGnbStore = ({handleSecondChild, clickSecondChild}) => {
  const [clicked, setClicked] = useState(false)

  const handleOnClick = () => {
    setClicked(!clicked)
  }

  return (
    <Container>
      <TitleButton
        type="button"
        onClick={handleSecondChild}>
        <Title>
          스토어
        </Title>
        <Icon
          icon="chevron"
          size={16}
          color="#424242" 
          style={{transform: 'rotate('+ 180 + 'deg)'}}/>
      </TitleButton>
      <UlContainer 
        style={ clickSecondChild 
                ? {display: "block"} 
                : {display: "none"}
      }>
        <Items>스토어홈</Items>
        <Items 
          style={
            {display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            paddingRight: 15+"px"}
          }
          onClick={handleOnClick}>
          카테고리
          <Icon 
            icon="chevron"
            size={14}
            color="#424242"/>
        </Items>
        <Items>신혼가구</Items>
        <Items>베스트</Items>
        <Items>오늘의딜</Items>
        <Items>주방꿀템</Items>
        <Items>주방4대천왕</Items>
        <Items>홈오피스</Items>
        <Items>물어볼맛집</Items>
        <Items>기획전</Items>
      </UlContainer>
    </Container>
  )
}

export default ModalGnbStore
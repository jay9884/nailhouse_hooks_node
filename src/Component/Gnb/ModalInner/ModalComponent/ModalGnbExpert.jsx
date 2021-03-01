import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '../../../TagStyle/Icon'

const Container = styled.div`
  border-top: 1px solid #E0E2E7;
  border-bottom: 1px solid #E0E2E7;
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

const ModalGnbExpert = ({handleThirdChild, clickThirdChild}) => {
  return (
    <Container>
      <TitleButton
        type="button"
        onClick={handleThirdChild}>
        <Title>
          인테리어시공
        </Title>
        <Icon
          icon="chevron"
          size={16}
          color="#424242" 
          style={{transform: 'rotate('+ 180 + 'deg)'}}/>
      </TitleButton>
      <UlContainer 
        style={ clickThirdChild 
                ? {display: "block"} 
                : {display: "none"}
      }>
        <Items>시공홈</Items>
        <Items>시공스토어</Items>
      </UlContainer>
    </Container>
  )
}

export default ModalGnbExpert
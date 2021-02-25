import React from 'react'
import styled from 'styled-components'
import Icon from '../../TagStyle/Icon'


const TypingText = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 40px;
  padding-left: 40px;
  border: 1px solid #E0E2E7;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-weight: 400;
  color: #424242;
  cursor: pointer;

  :hover {
    background-color: #F7F8FA;
  }
`

const IconDiv = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
`

const SearchTyping = ({value}) => {
  return (
      <TypingText>
        <IconDiv>
          <Icon
            icon="search"
            size={15} 
            color="#858896" />
        </IconDiv>
        {value.length > 12 
          ? value.substring(0, 12) + "..." 
          : value}
      </TypingText>
  )
}

export default SearchTyping
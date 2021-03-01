import React from 'react'
import styled from 'styled-components'
import Icon from '../../TagStyle/Icon'

const SearchListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 40px;
  padding: 10px 16px;
  border: none;
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

const IconDiv = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`

const SearchList = ({item, deleteHistories}) => {
  const handleOnClick = () => {
    deleteHistories(item)
  }

  return (
      <SearchListItem>
        {item}
        <IconDiv
          onClick={handleOnClick}>
          <Icon
            icon="close"
            size={15} 
            color="#858896" />
        </IconDiv>
      </SearchListItem>
  )
}

export default SearchList
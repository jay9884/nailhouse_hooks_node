import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import{ SearchInput } from '../../TagStyle/SearchInput'
import SearchTyping from './SearchTyping'
import SearchList from './SearchList'
import Icon from '../../TagStyle/Icon'

const Container = styled.div`
  position: relative;
  width: ${props => props.width ? props.width : 264+"px"};
`

const IconDiv = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`

const ContainerUl = styled.ul`
  position: absolute;
  z-index: 1;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: 272px;
  padding: 8px 8px;
  border: 1px solid #E0E2E7;
  border-radius: 4px;
  background-color: #ffffff;
`

const UlHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
`

const UlTitle = styled.span`
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-weight: 400;
`

const AllClearButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-weight: 400;
  cursor: pointer;
`

const Search = ({isPc, isMobile}) => {
  const [inputValue, setInputValue] = useState('')
  const [searchHistory, setSearchHistory] 
    = useState(localStorage.getItem('searchHistory').split(','))
  const [isTyping, setIsTyping] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleOnBlur = () => {
    setIsClicked(false)
    setIsTyping(false)
  }

  //close 버튼 클릭 시 검색어 검색기록 배열에서 지움
  const deleteHistories = (content) => {
    const newSearchHistory = 
      [...searchHistory]
        .filter((v) => v !== content)

    setSearchHistory(newSearchHistory)
  }
  //전체 삭제 버튼 클릭 시 검색기록 배열 초기화
  const deleteAllHistories = () => {
    setSearchHistory([])
  }

  const handleOnClick = (e) => {
    if(e.currentTarget.value === '') {
      setIsClicked(true)
    } else {
      return
    }
  }

  const handleOnChange = (e) => {
    const { value } = e.currentTarget
    setIsTyping(true)
    setIsClicked(false)
    setInputValue(value)
  }

  //입력 후 엔터 눌렀을 때 검색기록 배열에 담음
  const handleOnKeyDown = (e) => {
    const { value } = e.currentTarget
    if(e.keyCode !== 13) return
    if(!value) return

    const newSearchHistory = [...searchHistory]
    
    //동일한 검색기록이 있으면 이전 검색어 삭제
    newSearchHistory.forEach((v, i) => {
      if(v === e.currentTarget.value) {
        newSearchHistory.splice(i, 1);
      } 
    })

    newSearchHistory.push(e.currentTarget.value)
    setSearchHistory(newSearchHistory)

    window.location.replace(`/?=${e.currentTarget.value}`)
  }

  useEffect(() => {
    const newSearchHistory = [...searchHistory]

    //빈 배열 요소 제거
    newSearchHistory.forEach((v) => v !== "")
    
    //검색기록이 5개를 초과할 경우 가장 첫번째 요소 지움
    if(newSearchHistory.length > 5) {
      newSearchHistory.shift()
      setSearchHistory(newSearchHistory)
    }
    // console.log(searchHistory)
    localStorage.setItem('searchHistory', searchHistory)
    // console.log(localStorage.getItem('searchHistory'))
  }, [searchHistory])

  return (
    <>
    <Container 
      width={isMobile ? "87%" : null}
      >
      <SearchInput
        type="text"
        placeholder="스토어 검색"
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        onClick={handleOnClick}/>
      <IconDiv>
        <Icon
          icon="search"
          size={20} 
          color="#858896" />
      </IconDiv>

      {isPc && isTyping && inputValue && (
        <ContainerUl>
          <SearchTyping value={inputValue}/>
        </ContainerUl>
      )}

      {!isPc || (isPc && isClicked && searchHistory.length)
        ? (<ContainerUl>
            <UlHeader>
              <UlTitle>최근 검색어</UlTitle>
              <AllClearButton
                type="button"
                onClick={deleteAllHistories}>
                  전체 삭제
              </AllClearButton>
            </UlHeader>
            {searchHistory.map((v) => 
              <SearchList 
                item={v}
                key={v}
                deleteHistories={deleteHistories}/>
            )}
          </ContainerUl>)
        : null
      }
    </Container>
    </>
  )
}

export default Search
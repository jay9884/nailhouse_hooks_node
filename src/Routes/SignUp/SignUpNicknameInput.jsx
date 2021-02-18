import React, { useState } from "react"
import styled from "styled-components"
import { Input } from "../../Component/TagStyle/Input"
import { SignUpAlert } from "./SignUpAlert"
import { SignUpInputTitle } from "./SignUpInputTitle"

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

const SignUpNicknameInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [nickTyped, setNickTyped] = useState(false)

  const handleOnChange = (e) => {
    const { value } = e.currentTarget
    setInputValue(value)
    setNickTyped(true)
  }

  return (
    <Container>
      <SignUpInputTitle
        style={(nickTyped && (inputValue.length < 2 || inputValue.length > 15))
          ? {color: "#ff7777"} 
          : null}>
        별명
      </SignUpInputTitle>
      <SignUpAlert style={{color: "#757575"}}>
        다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
      </SignUpAlert>
      
      <Input 
        type="text"
        placeholder="별명"
        value={inputValue}
        onChange={handleOnChange} 
        style={(nickTyped && (inputValue.length < 2 || inputValue.length > 15))
          ? {borderColor: "#ff7777"}
          : null}/>

      {(nickTyped && !inputValue)
        ? <SignUpAlert>필수 입력 항목입니다.</SignUpAlert>
        : null}

      {(inputValue && (inputValue.length < 2 || inputValue.length > 15))
        ? <SignUpAlert>2자 이상 15자 이하로 입력해주세요.</SignUpAlert>
        : null}
    </Container>
  )
}

export default SignUpNicknameInput;
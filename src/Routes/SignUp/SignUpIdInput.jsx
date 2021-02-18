import React, { useState } from "react"
import styled from "styled-components"
import { Input } from "../../Component/TagStyle/Input"
import { SignUpAlert } from "./SignUpAlert"
import { SignUpInputTitle } from "./SignUpInputTitle"

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

const SignUpIdInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [loseFocus, setLooseFocus] = useState(false)

  const handleOnChange = (e) => {
    const { value } = e.currentTarget
    setInputValue(value)
  }

  const handleOnFocus = () => {
    setLooseFocus(false)
  }

  const handleOnBlur = () => {
    setLooseFocus(true)
  }

  return (
    <Container>
      <SignUpInputTitle
        style={(loseFocus && !inputValue) 
          ? {color: "#ff7777"} 
          : null}>
        아이디
      </SignUpInputTitle>
      
      <Input 
        type="text"
        placeholder="아이디"
        value={inputValue}
        onChange={handleOnChange} 
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        style={(loseFocus && !inputValue)
          ? {borderColor: "#ff7777"}
          : null}/>

      {(loseFocus && !inputValue)
        ? <SignUpAlert>필수 입력 항목입니다.</SignUpAlert>
        : null}
    </Container>
  )
}

export default SignUpIdInput;
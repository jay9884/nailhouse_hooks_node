import React, {  useState } from "react"
import styled from "styled-components"
import { Input } from "../../Component/TagStyle/Input"
import { SignUpAlert } from "./SignUpAlert"
import { SignUpInputTitle } from "./SignUpInputTitle"

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

const SignUpPwInput = () => {
  const [pwValue, setPwValue] = useState('')
  const [pwCheckValue, setPwCheckValue] = useState('')
  const [pwTyped, setPwTyped] = useState(false)
  const [pwCheckTyped, setPwCheckTyped] = useState(false)

  const handlePwChange = (e) => {
    const { value } = e.currentTarget
    setPwValue(value)
    setPwTyped(true)
  }

  const handlePwCheckChange = (e) => {
    const { value } = e.currentTarget
    setPwCheckValue(value)
    setPwCheckTyped(true)
  }

  return (
    <Container>
      <SignUpInputTitle
        style={(pwTyped && pwValue.length < 8)
          ? {color: "#ff7777"} 
          : null}>
        비밀번호
      </SignUpInputTitle>
      <SignUpAlert style={{color: "#757575"}}>
        8자 이상 입력해주세요.
      </SignUpAlert>
      
      <Input 
        type="password"
        placeholder="비밀번호" 
        value={pwValue}
        onChange={handlePwChange}
        style={(pwTyped && pwValue.length < 8)
          ? {borderColor: "#ff7777"}
          : null}/>

      {(pwTyped && !pwValue)
        ? <SignUpAlert>필수 입력 항목입니다.</SignUpAlert>
        : null}

      {(pwTyped && pwValue && pwValue.length < 8)
        ? <SignUpAlert>8자 이상입력해주세요.</SignUpAlert>
        : null}

      <SignUpInputTitle
        style={(pwCheckTyped && pwCheckValue.length < 8)
                ? {color: "#ff7777", marginTop: 30+"px"} 
                : {marginTop: 30+"px"}}>
        비밀번호 확인
      </SignUpInputTitle>

      <Input 
        type="password"
        placeholder="비밀번호 확인" 
        value={pwCheckValue}
        onChange={handlePwCheckChange}
        style={(pwCheckTyped && pwCheckValue.length < 8)
          ? {borderColor: "#ff7777"}
          : null}/>

      {(pwCheckTyped && !pwCheckValue) 
        ? <SignUpAlert>확인을 위해 비밀번호를 한 번 더 입력해주세요.</SignUpAlert>
        : null}

      {(pwCheckTyped && pwCheckValue && (pwValue !== pwCheckValue))
        ? <SignUpAlert>비밀번호가 일치하지 않습니다.</SignUpAlert>
        : null}

    </Container>
  )
}

export default SignUpPwInput;
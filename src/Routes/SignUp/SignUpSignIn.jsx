import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`

const SignInText = styled.span`
  font-size: 15px;
  line-height: 15px;
  font-weight: 400;
  color: #424242;
`

const SignUpSignIn = () => (
  <Container>
    <SignInText>이미 아이디가 있으신가요?</SignInText>
    <Link to ="/login">
      <SignInText
        style={{fontWeight: 700, textDecoration: 'underline', marginLeft: 10+"px"}}>
        로그인
      </SignInText>
    </Link>
  </Container>
)

export default SignUpSignIn;
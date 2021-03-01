import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../Component/TagStyle/Button'
import SignUpUserSns from '../SignUp/SignUpUserSns'
import LoginInput from './LoginInput'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 30px;
`

const LogoDiv = styled.div`
  width: 145px;
  height: 50px;
  margin-bottom: 30px;
`

const LogoImg = styled.img`
  width: 100%;
  height: auto;
`

const LoginForm = styled.form`

`

const SignUpText = styled.span`
  display: block;
  margin-bottom: 30px;
  font-size: 15px;
  line-height: 1.4;
  color: #424242;

  :hover {
    text-decoration: underline;
  }
`

const Login = (props) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if(!e.target[0].value) {
      alert('아이디를 입력해주세요')
      return
    }
    if(!e.target[1].value) {
      alert('비밀번호를 입력해주세요')
      return
    }

    let { history: { push } } = props

    axios.post('http://localhost:3001/api/user/login', {
      id : e.target[0].value,
      pw : e.target[1].value
    }).then((response) => {
      console.log(response)
      const {data: { token }} = response
      const {data: { expired }} = response
      localStorage.setItem("authorization", token)
      localStorage.setItem("expired", expired)
      axios.defaults.headers.common["authorization"] = token
      console.log('로그인페이지', axios.defaults.headers)
      // push('/')
      window.location.replace("/")
    }).catch(error => { 
      console.log(error.response)
      const { data: { message }} = error.response
      console.log('error : ', error.response)
      alert(message)
    });
  }

  return (
    <Container>
      <Link to="/">
        <LogoDiv>
          <LogoImg src="/logo.svg" alt="내일의 집" />
        </LogoDiv>
      </Link>

      <LoginForm
        onSubmit={handleOnSubmit}>
        <LoginInput />
        <Button 
          big
          type="submit"
          style={{marginTop: 20+"px", marginBottom: 20+"px"}}>
          로그인
          </Button>
      </LoginForm>

      <Link to="/signup">
        <SignUpText>회원가입</SignUpText>
      </Link>
      <SignUpUserSns 
        text = {"SNS계정으로 간편 로그인/회원가입"}/>
    </Container>
  )
}

export default withRouter(Login)
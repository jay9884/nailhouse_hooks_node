import React from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom"
import styled from "styled-components"
import { Button } from '../../Component/TagStyle/Button'
import SignUpAgreement from './SignUpAgreement'
import SignUpIdInput from './SignUpIdInput'
import SignUpNicknameInput from './SignUpNicknameInput'
import SignUpPwInput from './SignUpPwInput'
import SignUpUserSns from './SignUpUserSns'
import SignUpSignIn from './SignUpSignIn'

const Container = styled.div`
  width: 100%;
  padding: 60px 0;
`

const SignUpTitle = styled.h1`
  margin-bottom: 30px;
  color: #424242;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
`

const InputForm = styled.form`
  width: 100%;
  margin-bottom: 50px;
`

const SignUp = (props) => {
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(!e.target[0].value) {
      alert('아이디를 입력해주세요.');
      return
    }
    if(e.target[1].value.length < 8) {
      alert('비밀번호를 8자 이상입력해주세요');
      return
    }
    if(e.target[1].value !== e.target[2].value) {
      alert('비밀번호가 일치하지 않습니다');
      return
    }
    if(e.target[3].value.length > 15 || e.target[3].value.length < 2) {
      alert('닉네임을 2자 이상 15자 이하로 입력해주세요.');
      return
    }
    if(!(e.target[5].checked && e.target[6].checked && e.target[7].checked)) {
      alert('필수 동의 항목을 체크해주세요.');
      return
    }    

    let { history: { push } } = props

    axios.post('http://localhost:3001/api/user/signup', {
      id : e.target[0].value,
      pw : e.target[1].value,
      nickname: e.target[3].value,
      commercial: e.target[8].checked ? 1 : 0
    }).then((response) => {
      console.log(response)
      push('/login')
    }).catch(error => { 
      const { data: { message }} = error.response
      console.log('error : ',error.response)
      alert(message);
    })
  }

  return (
    <Container>
      <SignUpTitle>
        회원가입
      </SignUpTitle>

      <SignUpUserSns text={"SNS계정으로 간편하게 회원가입"}/>

      <InputForm
        onSubmit={handleOnSubmit}>
        <SignUpIdInput />
        <SignUpPwInput />
        <SignUpNicknameInput />
        <SignUpAgreement />
        <Button 
          type="submit"
          style={{height: 76+"px"}}>
            회원가입 완료
        </Button>
      </InputForm>

      <SignUpSignIn />      
    </Container>
  )
}

export default withRouter(SignUp);
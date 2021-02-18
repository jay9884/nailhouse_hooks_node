import React from 'react'
import styled from 'styled-components'
import { Input } from '../../Component/TagStyle/Input';

const LoginInput = () => (
  <>
  <Input 
    type="text" 
    placeholder="아이디" 
    style={{height: 50+"px"}}/>
  <Input 
    type="password" 
    placeholder="비밀번호" 
    style={{height: 50+"px"}}/>
  </>
)

export default LoginInput;
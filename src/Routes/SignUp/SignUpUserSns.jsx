import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ededed;
  text-align: center;
`

const SignUpSnsTitle = styled.p`
  margin-bottom: 15px;
  font-size: 12px;
  color: #757575;
`

const SignUpSnsOl = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SignUpSnsListLi = styled.li`
  width: 48px;
  height: 48px;
  margin: 0 10px;
`

const SignUpSnsImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
`

const SignUpUserSns = ({text}) => {
  return (
    <Container>
      <SignUpSnsTitle>
        {text}
      </SignUpSnsTitle>

      <SignUpSnsOl>
        <SignUpSnsListLi>
          <SignUpSnsImg 
            style={{ 
              backgroundImage: 'url(/assets/facebook_logo.jpg)' 
            }}>
          </SignUpSnsImg>
        </SignUpSnsListLi>

        <SignUpSnsListLi>
          <SignUpSnsImg 
            style={{ 
              backgroundImage: 'url(/assets/kakaotalk_logo.jpg)' 
            }}>
          </SignUpSnsImg>
        </SignUpSnsListLi>

        <SignUpSnsListLi>
          <SignUpSnsImg 
            style={{ 
              backgroundImage: 'url(/assets/naver_logo.png)' 
            }}>
          </SignUpSnsImg>
        </SignUpSnsListLi>
      </SignUpSnsOl>
    </Container>
  )
}

export default SignUpUserSns;
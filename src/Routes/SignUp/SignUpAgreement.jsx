import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { CheckboxInput } from "../../Component/TagStyle/CheckboxInput"
import { SignUpAlert } from "./SignUpAlert"
import { SignUpInputTitle } from "./SignUpInputTitle"

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

const OuterContainer = styled.div`
  padding: 23px 23px 6px 16px;
  border: 1px solid #E0E2E7;
`

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 18px;
  margin-bottom: 16px;
  border-bottom: 1px solid #E0E2E7;
`

const BottonContainer = styled.div`

`

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const AgreementText = styled.span`
  margin-left: 10px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  font-weight: 400;
  color: #3f4150;
`

const RequirementText = styled.span`
  margin-left: 4px;
  color: #35c5f0;
  font-size: 12px;
`

const SignUpAgreement = () => {
  const [allChecked, setAllChecked] = useState(false)
  const [ageChecked, setAgeChecked] = useState(false)
  const [policyChecked, setPolicyChecked] = useState(false)
  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [commercialChecked, setCommercialChecked] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  const handleOnAllChange = (e) => {
    setAllChecked(e.currentTarget.checked)
    setAgeChecked(e.currentTarget.checked)
    setPolicyChecked(e.currentTarget.checked)
    setPrivacyChecked(e.currentTarget.checked)
    setCommercialChecked(e.currentTarget.checked)
    setClicked(true)
  }

  const handleOnAgeChange = (e) => {
    setAgeChecked(e.currentTarget.checked)
    setClicked(true)
  }

  const handleOnPolicyChange = (e) => {
    setPolicyChecked(e.currentTarget.checked)
    setClicked(true)
  }

  const handleOnPrivacyChange = (e) => {
    setPrivacyChecked(e.currentTarget.checked)
    setClicked(true)
  }

  const handleOnCommercialChange = (e) => {
    setCommercialChecked(e.currentTarget.checked)
    setClicked(true)
  }

  useEffect(() => {
    if(ageChecked && policyChecked && privacyChecked && commercialChecked) {
      setAllChecked(true)
    } else {
      setAllChecked(false)
    }
  }, [allChecked, ageChecked, policyChecked, privacyChecked, commercialChecked])
  
  return (
    <Container>
      <SignUpInputTitle>
        약관동의
      </SignUpInputTitle>
      <OuterContainer>
        <TopContainer>
          <CheckboxInput 
            type="checkbox"
            checked={allChecked}
            onChange={handleOnAllChange}/>
          <AgreementText
            style={{fontWeight: 700, lineHeight: 21+"px"}}>
            전체동의
          </AgreementText>
        </TopContainer>

        <BottonContainer>
          <ItemContainer>
            <CheckboxInput 
              type="checkbox"
              checked={ageChecked}
              onChange={handleOnAgeChange}/>
            <AgreementText>만 14세 이상입니다.</AgreementText>
            <RequirementText>(필수)</RequirementText>
          </ItemContainer>

          <ItemContainer>
            <CheckboxInput 
              type="checkbox"
              checked={policyChecked}
              onChange={handleOnPolicyChange}/>
            <AgreementText>이용약관</AgreementText>
            <RequirementText>(필수)</RequirementText>
          </ItemContainer>

          <ItemContainer>
            <CheckboxInput 
              type="checkbox"
              checked={privacyChecked}
              onChange={handleOnPrivacyChange}/>
            <AgreementText>개인정보처리방침</AgreementText>
            <RequirementText>(필수)</RequirementText>
          </ItemContainer>

          <ItemContainer>
            <CheckboxInput 
              type="checkbox"
              checked={commercialChecked}
              onChange={handleOnCommercialChange}/>
            <AgreementText>이벤트, 프로모션 알림 메일 및 SNS 수신</AgreementText>
            <RequirementText
              style={{color: "#dbdbdb"}}>
              (선택)</RequirementText>
          </ItemContainer>

        </BottonContainer>
      </OuterContainer>
      {clicked && (!ageChecked || !policyChecked || !privacyChecked)
        ? <SignUpAlert>필수 동의 항목을 모두 체크해주세요.</SignUpAlert>
        : null}
    </Container>
  )
}

export default SignUpAgreement;
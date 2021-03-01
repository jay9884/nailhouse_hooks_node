import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ModalGnbAuthorized from './ModalComponent/ModalGnbAuthorized'
import ModalGnbCommunity from './ModalComponent/ModalGnbCommuity'
import ModalGnbExpert from './ModalComponent/ModalGnbExpert'
import ModalGnbFooter from './ModalComponent/ModalGnbFooter'
import ModalGnbStore from './ModalComponent/ModalGnbStore'
import ModalGnbUnauthorized from './ModalComponent/ModalGnbUnauthorized'
import ModalGnbUtils from './ModalComponent/ModalGnbUtils'

const ModalInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  padding: 20px 20px;
  background-color: #ffffff;

  @media screen and (min-width : 367px) and (max-width: 514px) {
    width: 70%;
  }

  @media screen and (max-width: 366px) {
    width: 256px;
  }
`

const LogoDiv = styled.div`
  width: 55px;
  height: 25px;
  margin-left: 10px;
  cursor: pointer;
`

const LogoImg = styled.img`
  width: 100%;
  height: auto;
`

const ModalInnerGnb = ({closeModal}) => {
  const token = localStorage.getItem('authorization')
  const [clickFirstChild, setClickFirstChild] = useState(true)
  const [clickSecondChild, setClickSecondChild] = useState(false)
  const [clickThirdChild, setClickThirdChild] = useState(false)

  const handleFirstChild = () => {
    setClickFirstChild(!clickFirstChild)
    setClickSecondChild(clickFirstChild)
    setClickThirdChild(clickThirdChild)
  }

  const handleSecondChild = () => {
    setClickSecondChild(!clickSecondChild)
    setClickFirstChild(clickSecondChild)
    setClickThirdChild(clickSecondChild)
  }

  const handleThirdChild = () => {
    setClickThirdChild(!clickThirdChild)
    setClickFirstChild(clickThirdChild)
    setClickSecondChild(clickThirdChild)
  }

  return(
    <ModalInner>
      <LogoDiv onClick={closeModal}>
        <LogoImg src="/logo.svg" alt="내일의 집" />
      </LogoDiv>
      {token ? <ModalGnbAuthorized /> : <ModalGnbUnauthorized />}
      <ModalGnbCommunity 
        handleFirstChild={handleFirstChild}
        clickFirstChild={clickFirstChild}/>
      <ModalGnbStore 
        handleSecondChild={handleSecondChild}
        clickSecondChild={clickSecondChild}/>
      <ModalGnbExpert 
        handleThirdChild={handleThirdChild}
        clickThirdChild={clickThirdChild}/>
      <ModalGnbUtils />
      <ModalGnbFooter />
    </ModalInner>
  )
}

export default ModalInnerGnb
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { HoverIconDiv } from '../../TagStyle/HoverIconDiv'
import HoverIcon from '../../TagStyle/HoverIcon'
import ReactMModal from '../../ReactModal'
import ModalInnerSearchMobile from '../ModalInner/ModalInnerSearchMobile'
import ModalInnerGnb from '../ModalInner/ModalInnerGnb'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`

const LeftButton = styled.button`
  border: none;
  color: #35c5f0;
  background-color: inherit;
  font-size: 35px;
  cursor: pointer;
`

const RigthButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

const GnbMobile = () => {
  const [gnbVisible, setGnbVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const openGnb = () => {
    setGnbVisible(true)
  }

  const closeGnb = () => {
    setGnbVisible(false)
  }

  return (
    <Container>
      <LeftButton
        onClick={openGnb}>≡</LeftButton>
      <Link to="/">
        <div style={{width: 80+"px", height: 21+"px"}}>
          <img src="/logo.svg" alt="내일의 집"
               style={{width: 100+"%", height: "auto"}}/>
        </div>
      </Link>
      <RigthButtons>
        <HoverIconDiv
          onClick={openModal}>
          <HoverIcon icon="search" 
                size={24} />
        </HoverIconDiv>
        <HoverIconDiv>
          <HoverIcon icon="cart" 
                size={24} />
        </HoverIconDiv>
      </RigthButtons>
      {modalVisible && (
        <ReactMModal
          visible={modalVisible}
          maskClosable={true}
          closeModal={closeModal}
          closable={true}>
            <ModalInnerSearchMobile closeModal={closeModal}/>
        </ReactMModal>)}
      {gnbVisible && (
        <ReactMModal
          visible={gnbVisible}
          maskClosable={true}
          closeModal={closeGnb}
          closable={false}>
            <ModalInnerGnb closeModal={closeGnb}/>
        </ReactMModal>
      )}
    </Container>
  )
}

export default GnbMobile
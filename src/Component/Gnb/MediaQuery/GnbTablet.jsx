import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { HoverIconDiv } from '../../TagStyle/HoverIconDiv'
import NavMenu from '../GnbComponents/NavMenu'
import Unauthorized from '../GnbComponents/Unauthorized'
import Authorized from '../GnbComponents/Authorized'
import HoverIcon from '../../TagStyle/HoverIcon'
import ReactModal from '../../ReactModal'
import ModalInnerSearchTablet from '../ModalInner/ModalInnerSearchTablet'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
`

const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
`

const ContainerRigth = styled.div`
  display: flex;
  align-items: center;
`


const GnbTablet = () => {
  const token = localStorage.getItem('authorization')

  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <Container>
      <ContainerLeft>
        <Link to="/">
          <div style={{width: 100+"px", height: 27+"px", marginRight: 70+"px"}}>
            <img src="/logo.svg" alt="내일의 집"
                style={{width: 100+"%", height: "auto"}}/>
          </div>
        </Link>
        <NavMenu />
      </ContainerLeft>
      <ContainerRigth>
        <HoverIconDiv 
          onClick={openModal}
          style={{marginRight: 6+"px"}}>
          <HoverIcon icon="search" 
                size={24} />
        </HoverIconDiv>
        {token 
          ? <Authorized />
          : <Unauthorized />}
      </ContainerRigth>
      {modalVisible && (
        <ReactModal
          visible={modalVisible}
          maskClosable={true}
          closeModal={closeModal}
          closable={false}>
            <ModalInnerSearchTablet />
        </ReactModal>)}
    </Container>
  )
}

export default GnbTablet
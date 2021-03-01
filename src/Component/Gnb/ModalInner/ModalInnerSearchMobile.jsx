import React from 'react'
import styled from 'styled-components'
import Search from '../Search/Search'

const ModalInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  padding: 15px 15px;
  background-color: #ffffff;
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;
  width: 40px;
  height: 40px;
  padding: 0 0;
  border: none;
  background-color: #ffffff;
  color: #424242;
  font-size: 15px;
  line-height: 21px;
  font-weight: 700;
  cursor: pointer;
`

const ModalInnerSearchMobile = ({closeModal}) => {
  return(
    <ModalInner>
      <Search isMobile={true}/>
      <ModalCloseButton 
        className="modal-close"
        onClick={closeModal}>
          취소
      </ModalCloseButton>
    </ModalInner>
  )
}

export default ModalInnerSearchMobile
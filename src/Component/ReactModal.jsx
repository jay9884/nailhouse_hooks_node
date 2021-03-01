import React, { useEffect } from 'react'
import styled from 'styled-components'

const ModalWrap = styled.div`
  display: ${(props) => props.visible ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`

const ModalInner = styled.div`
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  transition: border-color 200ms ease-in, padding 200ms ease-in,
    max-height 200ms ease-in, box-shadow 200ms ease-in;
`

const ReactModal = ({
  visible, children, maskClosable, closeModal, closable
}) => {
  const onMaskClick = (e) => {
    if(e.target === e.currentTarget) {
      closeModal(e)
    }
  }

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
    const scrollY = document.body.style.top
    document.body.style.cssText = `position: ""; top: "";`
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])

  return(
    <>
      <ModalOverlay visible={visible} />
      <ModalWrap
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner 
          tabIndex="0" 
          className="modal-inner">
          {children}
        </ModalInner>
      </ModalWrap>
    </>
  )
}

export default ReactModal
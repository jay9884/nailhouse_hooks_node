import React from 'react'
import styled from 'styled-components'
import Search from '../Search/Search'

const ModalInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 326px;
  height: 100vh;
  padding: 30px 30px 5px;
  background-color: #ffffff;
`

const ModalInnerSearchTablet = () => {
  return(
    <ModalInner>
      <Search />
    </ModalInner>
  )
}

export default ModalInnerSearchTablet
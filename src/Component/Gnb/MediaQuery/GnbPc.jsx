import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import NavMenu from '../GnbComponents/NavMenu'
import Search from '../Search/Search'
import Unauthorized from '../GnbComponents/Unauthorized'
import Authorized from '../GnbComponents/Authorized'
import WritingButton from '../GnbComponents/WritingButton'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const ContainerLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ContainerRigth = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const GnbPc = () => {
  const token = localStorage.getItem('authorization')

  return(
    <Container>
      <ContainerLeft>
        <Link to="/">
          <div style={{width: 100+"px", height: 27+"px", marginRight: 50+"px"}}>
            <img src="/logo.svg" alt="내일의 집"
                style={{width: 100+"%", height: "auto"}}/>
          </div>
        </Link>
        <NavMenu />
      </ContainerLeft>
      <ContainerRigth>
        <Search isPc={true}/>
        {token 
          ? <Authorized />
          : <Unauthorized />}
        <WritingButton />
      </ContainerRigth>
    </Container>
  )
}

export default GnbPc
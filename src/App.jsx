import React, { useEffect, useState } from 'react'
import styled from  'styled-components'
import axios from 'axios'
import GlobalStyles from './Component/GlobalStyles'
import Router from './Component/Router'
import ReactModal from './Component/ReactModal'

const Layout = styled.div``

const App = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('authorization')
    if(token) {
      axios.get('http://localhost:3001/api/user/decode', {
        headers: {
          'authorization': `${token}`
        }
      }).then((res) => {
        const { data: { nickname }} = res
        setUsername(nickname)
      }).catch((err) => {
        console.error(err)
      })
    } else {
      return
    }
  }, [username])

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
      <ReactModal />
      로그인할 때 토큰을 로컬스토리지에 저장한 경우: {username ? username : 'annonymous'}
    </>
  )
}

export default App;

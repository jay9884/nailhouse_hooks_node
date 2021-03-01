import React, { useEffect, useState } from 'react'
import styled from  'styled-components'
import axios from 'axios'
import GlobalStyles from './Component/GlobalStyles'
import Router from './Component/Router'

const Layout = styled.div``

const App = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('authorization')
    const expired = localStorage.getItem('expired')
    if(expired && (Date.now() > expired)) {
      localStorage.removeItem('authorization')
      localStorage.removeItem('expired')
      alert('토큰 시간이 만료되어 로그아웃되었습니다')
    }

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
      로그인할 때 토큰을 로컬스토리지에 저장한 경우: {username ? username : 'annonymous'}
    </>
  )
}

export default App;

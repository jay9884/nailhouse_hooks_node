import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalStyles from './Component/GlobalStyles';
import Router from './Component/Router';

const App = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('authorization')
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
  }, [username])
  
  // useEffect(() => {
  //   axios.get('http://localhost:3001/api')
  //     .then((res) => {
  //       const { data: { username }} = res
  //       setUsername(username)
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // })

  return (
    <>
      <GlobalStyles />
      <Router />
      로그인할 때 토큰을 로컬스토리지에 저장한 경우: {username ? username : 'user'}
    </>
  )
}

export default App;

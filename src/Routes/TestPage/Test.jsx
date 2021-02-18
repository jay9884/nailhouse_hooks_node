import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Test = () => {
  const [username, setUsername] = useState('')
  console.log('render', axios.defaults.headers.common['authorization'])
  
  useEffect(() => {
    const token = axios.defaults.headers.common['authorization']
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


  return (
    <h3>
      로그인했을 때 토큰을 헤더에만 저장했을 경우: {username ? `${username}` : 'annonymous'}
    </h3>
  )
}

export default Test;
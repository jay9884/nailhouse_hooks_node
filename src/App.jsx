import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Router from './Component/Router';

const App = () => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/api')
      .then((response) => {
        const { data: { username }} = response
        setUsername(username)
      })
  }, [username])

  return (
    <div>
      <Router />
      hello, {username ? username : 'user'}
    </div>
  )
}

export default App;

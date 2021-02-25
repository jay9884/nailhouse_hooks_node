// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const { default: Gnb } = require("../../Component/Gnb")
import Gnb from '../../Component/Gnb'

const Test = () => {
  //로그인했을 때 토큰을 헤더에만 저장했을 경우
  // const [username, setUsername] = useState('')
  // console.log('render', axios.defaults.headers.common['authorization'])
  
  // useEffect(() => {
  //   const token = axios.defaults.headers.common['authorization']
  //   axios.get('http://localhost:3001/api/user/decode', {
  //     headers: {
  //       'authorization': `${token}`
  //     }
  //   }).then((res) => {
  //     const { data: { nickname }} = res
  //     setUsername(nickname)
  //   }).catch((err) => {
  //     console.error(err)
  //   })
  // }, [username])


  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-1">

        </div>
        <div className="col-5">
              <h2>
            테스트페이지
          </h2>
          <Gnb />
        </div>
        <div className="col-6">
          <h2>grid?</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Test;
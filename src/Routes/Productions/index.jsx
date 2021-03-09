import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import { Mobile, Tablet, PC } from "../../Component/MediaQuery"
import ProductionsPc from './ProductionsPc';

const Productions = (props) => {
  const [data, setData] = useState(null)
  
  useEffect(async () => {
    const pathname = props.location.pathname
    const { data } = await axios.get(`http://localhost:3001/api${pathname}`)
    setData(data[0])
  }, [])

  return(
    <>
      <Mobile>

      </Mobile>
      <Tablet>

      </Tablet>
      <PC>
        <ProductionsPc />
      </PC>
    </>
  )
}

export default withRouter(Productions)
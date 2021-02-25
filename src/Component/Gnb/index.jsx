import React from 'react'
import { withRouter } from "react-router-dom"
import { Mobile, Tablet, PC } from "../MediaQuery"
import GnbMobile from './MediaQuery/GnbMobile'
import GnbPc from './MediaQuery/GnbPc'
import GnbTablet from './MediaQuery/GnbTablet'

const Gnb = (props) => {
  const pathname = props.location.pathname;
  if(pathname.includes('login') || pathname.includes('signup')) {
    return null;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Mobile>
            <GnbMobile />
          </Mobile>
          <Tablet>
            <GnbTablet />
          </Tablet>
          <PC>
            <GnbPc />
          </PC>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Gnb)
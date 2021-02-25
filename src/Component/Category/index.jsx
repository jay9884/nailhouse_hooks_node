import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import CategoryList from './CategoryList'

const CategoryDiv = styled.div`
  border-top: 1px solid #E0E2E7;
  border-bottom: 1px solid #E0E2E7;
`

const Category = (props) => {
  const pathname = props.location.pathname;
  if(pathname.includes('login') || pathname.includes('signup')) {
    return null;
  }

  return (
    <CategoryDiv>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <CategoryList />
          </div>
        </div>
      </div>
    </CategoryDiv>
  )
}

export default withRouter(Category)
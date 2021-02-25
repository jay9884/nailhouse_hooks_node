import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from '../Routes/Login';
import SignUp from '../Routes/SignUp'
import Test from '../Routes/TestPage/Test';
import Category from './Category';
import Gnb from './Gnb';

const PageRouter = () => {
  return (
    <Router>
      <Gnb />
      <Category />
      <Switch>
        <Route path="/test" exact component={Test} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  )
}

export default PageRouter;
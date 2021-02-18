import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from '../Routes/Login';
import SignUp from '../Routes/SignUp'
import Test from '../Routes/TestPage/Test';

const PageRouter = () => {
  return (
    <Router>
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
import React, { Fragment } from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../../models/history'

import App from './App'
import Home from '../home/Home'
import Add from '../add/Add'
import Login from '../auth/Login'

const RouterSetup = () => (
  <Router history={history}>
    <Fragment>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/add" component={Add} />
      </App>
    </Fragment>
  </Router>
)

export default RouterSetup

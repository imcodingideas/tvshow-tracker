import React, { Fragment } from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../../models/history'

import App from './App'
import Home from '../home/Home'
import AddShow from '../shows/Add'
import ShowDetail from '../shows/Detail'
import Login from '../auth/Login'

const RouterSetup = () => (
  <Router history={history}>
    <Fragment>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/shows/:id" component={ShowDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/add" component={AddShow} />
      </App>
    </Fragment>
  </Router>
)

export default RouterSetup

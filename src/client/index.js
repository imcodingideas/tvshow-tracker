import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RouterSetup from './components/main/RouterSetup'

class Index extends Component {
  render() {
    return <RouterSetup />
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))

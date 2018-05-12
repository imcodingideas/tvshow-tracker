import React, { Component, Fragment } from 'react'
import './Navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="navbar-header">
          <a href="/" className="navbar-brand d-flex align-items-center mr-0">
            Show<strong>Trackr</strong>
          </a>
        </div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add">
                  Add
                </a>
              </li>
            </ul>
            <ul className="navbar-nav pull-right">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

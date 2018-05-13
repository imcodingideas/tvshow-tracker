import React, { Component, Fragment } from 'react'
import Navbar from '../main/Navbar/Navbar'
import '../../scss/styles.scss'

const uuidv4 = require('uuid/v4')

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headingTitle: null,
      genres: [],
      alphabet: [],
    }
    this.filterByGenre = this.filterByGenre.bind(this)
    this.filterByAlphabet = this.filterByAlphabet.bind(this)
  }

  componentDidMount() {
    fetch('/api/init')
      .then(res => res.json())
      .then(data => {
        const { headingTitle, genres, alphabet } = data
        this.setState({
          headingTitle,
          genres,
          alphabet,
        })
      })
  }

  filterByAlphabet(char) {
    this.setState(prevState => ({
      alphabet: prevState.alphabet.filter(c => c !== char),
      headingTitle: char,
    }))
  }

  filterByGenre(searchTerm) {
    this.setState(prevState => ({
      genres: prevState.genres.filter(genre => genre !== searchTerm),
      headingTitle: searchTerm,
    }))
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="jumbotron">
          <div className="container">
            <ul className="alphabet">
              {this.state.alphabet.map(char => (
                <li key={uuidv4()}>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
            <ul className="genres">
              {this.state.genres.map(genre => (
                <li key={uuidv4()}>
                  <span>{genre}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <div className="card-header">
              <span className="heading-title">{this.state.headingTitle}</span>
              <div className="float-right">
                <input
                  name="queryName"
                  className="search"
                  onChange={key => this.filterByGenre(key.target.value)}
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="card-body">
              <div className="row show-list">
                <div className="col-xs-4 col-md-3">
                  <a href="/shows/{{show._id}}">
                    <img className="img-rounded" width="100%" />
                  </a>
                  <div className="text-center">
                    <a href="/shows/{{show._id}}">Show Name</a>
                    <p className="text-muted">Episodes: 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

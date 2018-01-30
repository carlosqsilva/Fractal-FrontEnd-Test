import React, { Component } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled from "styled-components"

import BeerList from "./components/BeerList"
import Beer from "./components/Beer"
import { load_beer } from "./store/actions"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 900px) 1fr;
  min-height: 100vh;
`

class App extends Component {
  componentDidMount() {
    this.props.loadBeer()
    window.addEventListener("scroll", this.onScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      this.props.loadBeer()
    }
  }

  render() {
    const { beers } = this.props.state
    const { loadBeer } = this.props
    return (
      <Router>
        <Wrapper>
          <Route
            exact
            path="/"
            render={() => <BeerList data={beers} click={loadBeer} />}
          />
          <Route
            path="/:id"
            render={props => <Beer data={beers} {...props} />}
          />
        </Wrapper>
      </Router>
    )
  }
}

const state = state => ({
  state: state
})

const actions = dispatch => ({
  loadBeer: () => dispatch(load_beer())
})

export default connect(state, actions)(App)

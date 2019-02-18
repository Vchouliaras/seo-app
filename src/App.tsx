import * as React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header } from './components/Header'
import { Link } from './components/Link'
import { Navigation } from './components/Navigation'

import { HistoryContext } from './context'

import * as Cases from './routes'

const PageNav = () => (
  <React.Fragment>
    <Header> SEO for Single Page App </Header>
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/case1">Case 1</Link>
      <Link to="/case2">Case 2</Link>
      <Link to="/case3">Case 3</Link>
      <Link to="/case4">Case 4</Link>
      <Link to="/case5">Case 5</Link>
    </Navigation>
  </React.Fragment>
)

const App = () => {

  const [history, setHistory] = React.useState([])

  return (
    <BrowserRouter>
      <React.Fragment>
        <PageNav />
        <HistoryContext.Provider value={[history, setHistory]}>
          <Switch>
            <Route exact path='/' component={Cases.Home} />
            <Route path='/case1' component={Cases.Case1} />
            <Route path='/case2' component={Cases.Case2} />
            <Route path='/case3' component={Cases.Case3} />
            <Route path='/case4' component={Cases.Case4} />
            <Route path='/case5' component={Cases.Case5} />
            <Route component={Cases.NotFound} />
          </Switch>
        </HistoryContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
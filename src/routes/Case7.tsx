import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'

const Case7: React.SFC<ICase> = ({ location }) => {

  let i = 0
  while (i < 14000) {
    console.log(' i -> ', i)
    i++
  }

  return (
    <Content
      title={`Case7 - Blocking main JS thread - Prerender.io`}
      pathname={location.pathname}
    >
    <h1> {'Blocking main JS thread'} </h1>
    <p> {'This page contains code to block the main thread for an amount of time. Our ultimate goal is the measure user centric metrics like FMP, FCP, TTI'} </p>
    </Content>
  )
}

export default Case7
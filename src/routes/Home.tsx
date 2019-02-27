import * as React from 'react'
import styled from 'styled-components'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'

const List = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  list-style-type: square;
`

const Home: React.SFC<ICase> = ({ location }) => {

  let referrer = ''
  // if (location.state && location.state.referrer) {
  //   referrer = `- Referrer: ${location.state.referrer}`
  // }

  return (
    <Content
      title={`Home - Demonstrating cases for SEO on SPA ${referrer} - Prerender.io`}
      pathname={location.pathname}
    >
      <h1> {'Demonstrating cases for SEO on SPA'} </h1>
      <List>
        <li> Case1 - Delayed Ajax Call with loader - Prerender.io </li>
        <li> Case2 - setTimeout with loader - Prerender.io </li>
        <li> Case3 - CTA link - Prerender.io </li>
        <li> Case4 - 301 Redirect to Home page - Prerender.io </li>
        <li> Case5 - Heavy HTML with images - Prerender.io </li>
        <li> Case6 - Dummy page not in sitemap.xml - Prerender.io </li>
        <li> Case7 - Blocking main JS thread - Prerender.io </li>
      </List>
    </Content>
  )
}

export default Home
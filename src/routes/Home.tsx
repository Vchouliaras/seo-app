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
  return (
    <Content
      title={`Home - Demonstrating cases for SEO on SPA`}
      pathname={location.pathname}
    >
      <h1> {'Demonstrating cases for SEO on SPA'} </h1>
      <List>
        <li> Case1 - Ajax Call </li>
        <li> Case2 - Async js with big timeout </li>
        <li> Case3 - CTA link </li>
        <li> Case4 - Redirect to not-found page </li>
        <li> Case5 - Heavy HTML with images </li>
        <li> Case6 - Dummy page not in sitemap.xml </li>
      </List>
    </Content>
  )
}

export default Home
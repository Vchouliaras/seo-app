import * as React from 'react'
import styled  from 'styled-components'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'
import * as Theme from '../theme'

const Button = styled.button`
  background-color: ${Theme.Colors.blue};
  color: ${Theme.Colors.white};
  font-size: ${Theme.Fonts.large};
  max-width: 250px;
  padding: 20px;
  border: none;
  cursor: pointer;
  transition: all .2s linear;
  border: 2px solid ${Theme.Colors.white};
  :hover {
    background-color: ${Theme.Colors.white};
    border-color: ${Theme.Colors.blue};
    color: ${Theme.Colors.blue};
  }
`

const Home: React.SFC<ICase> = ({ location }) => {

  const [ counter, setCounter ] = React.useState(0)

  return (
    <Content
      title={`Case3 - Adding a CTA - Clicked ${counter} times`}
      pathname={location.pathname}
    >
    <h1> {`Adds a CTA to check for Bot\'s interactions - Clicked ${counter} times`} </h1>
    <Button onClick={() => setCounter(counter + 1)}> Press me Bot! </Button>
    </Content>
  )
}

export default Home
import * as React from 'react'
import styled from 'styled-components'
import * as Theme from '../theme'

const Header = styled.header`
  font-weight: 700;
  font-size: ${Theme.Fonts.medium};
  color: ${Theme.Colors.white};
  background-color: ${Theme.Colors.blue};
  padding: 15px 10px;
  display: flex;
  justify-content: flex-start;
`

export { Header }
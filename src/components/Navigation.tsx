import * as React from 'react'
import styled from 'styled-components'
import * as Theme from '../theme'

const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  font-size: ${Theme.Fonts.medium};
  border-bottom: 3px solid ${Theme.Colors.blue};
`

export { Navigation }
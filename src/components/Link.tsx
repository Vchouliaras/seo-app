import * as React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import * as Theme from '../theme'

const Link = styled(RouterLink)`
  text-decoration: none;
  cursor:pointer;
  color: ${Theme.Colors.black};
  padding: 15px 20px;
  font-weight: 400;
  :hover {
    color: ${Theme.Colors.white};
    background-color: ${Theme.Colors.blue};
  }
`

export  { Link }
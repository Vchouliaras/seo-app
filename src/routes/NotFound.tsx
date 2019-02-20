import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'

const NotFound: React.SFC<ICase> = ({ location, staticContext }) => {

  if (staticContext) {
    staticContext.status = 404
  }

  return (
    <Content
      title={`Not Found`}
      pathname={location.pathname}
    >
      <h1> {'NOT FOUND 404 PAGE'} </h1>
    </Content>
  )
}

export default NotFound
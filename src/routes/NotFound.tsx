import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'
import { Helmet } from 'react-helmet'

const NotFound: React.SFC<ICase> = ({ location }) => {

  // Use bellow for SSR with React Router
  // if (staticContext) {
  //   staticContext.status = 404
  // }

  return (
    <React.Fragment>
      <Helmet>
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <Content
        title={`Not Found`}
        pathname={location.pathname}
      >
        <h1> {'NOT FOUND 404 PAGE'} </h1>
      </Content>
    </React.Fragment>
  )
}

export default NotFound
import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'

const Case4: React.SFC<ICase> = ({ location }) => {

  return (
    <Content
      title={`Case4 - This page will be remove soon`}
      pathname={location.pathname}
    >
    <h1> {'This page will be remove soon'} </h1>
    <p> {'This page will be redirected to not-found page with a proper 404 code, also is will not be included on the sitemap.xml '} </p>
    </Content>
  )
}

export default Case4
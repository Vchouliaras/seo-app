import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'

const Case6: React.SFC<ICase> = ({ location }) => {

  return (
    <Content
      title={`Case6 - Dummy page not in sitemap.xml`}
      pathname={location.pathname}
    >
    <h1> {'Dummy page not in sitemap.xml'} </h1>
    <p> {'This is a dummy page not in the sitemap.xml, checking whether will be indexed like the others'} </p>
    </Content>
  )
}

export default Case6
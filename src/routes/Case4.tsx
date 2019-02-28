import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'

import { Redirect } from 'react-router'
import { Helmet } from 'react-helmet'

const Case4: React.SFC<ICase> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="prerender-status-code" content="301" />
        <meta name="prerender-header" content="Location: /"></meta>
      </Helmet>
      <Content
        title={`Case4 - Prerender.io - This page will be redirected to Home for Google Bots`}
        pathname={location.pathname}
      >
      <h1> {'This page will be redirected to Home page with a proper 301 code for Google Bots'} </h1>
      </Content>
    </React.Fragment>
  )
}

export default Case4
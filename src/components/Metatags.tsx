import * as React from 'react'
import { Helmet } from 'react-helmet'

import { IMetatags } from '../types'

const Metatags: React.SFC<IMetatags> = React.memo(({ title, description }) => {
  return (
    <Helmet>
      <title> {title} </title>
      <meta name="description" content={description} />
    </Helmet>
  )
})

export { Metatags }
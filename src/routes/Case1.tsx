import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { StyledLoader as Loader } from '../components/Loader'
import { API_URL } from '../constants'
import { ICase } from '../types'

const getContent = async (): Promise<[]> => {
  const response = await fetch(API_URL, { method: 'GET' })
  const data = await response.json()

  return data
}

const Case1: React.SFC<ICase> = ({ location }) => {

  const [content, setContent] = React.useState(null)
  React.useEffect(() => {
    getContent().then(data => setContent(data))
  }, [])

  if (!content) {
    return <Loader />
  }

  return (
    <Content
      title={'Case 1 - Ajax Call'}
      pathname={location.pathname}
    >
      <h1>Perform an Ajax call with a loader</h1>
      <h4> {content.title} </h4>
      <p> {content.body} </p>
    </Content>
  )
}

export default Case1
import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { StyledLoader as Loader } from '../components/Loader'
import { ICase } from '../types'

const TIMEOYT_DELAY = 21000

const Case2: React.SFC<ICase> = ({ location }) => {

  const [data, setData] = React.useState({heading: '', content: ''})

  React.useEffect(() => {
    setTimeout(() => setData({
      heading: `Perform a setTimeout delay after ${TIMEOYT_DELAY / 1000}s`,
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`
    }), TIMEOYT_DELAY)
  }, [])

  if (!data.heading || !data.content) {
    return <Loader />
  }

  return (
    <Content
      title={`Case 2 - setTimeout delay at ${TIMEOYT_DELAY / 1000}s`}
      pathname={location.pathname}
    >
    <h1> {data.heading} </h1>
    <p> {data.content} </p>
    </Content>
  )
}

export default Case2
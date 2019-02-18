import * as React from 'react'

import { StyledContent as Content } from '../components/Content'
import { StyledLoader as Loader } from '../components/Loader'
import { API_URL } from '../constants'
import { ICase } from '../types'

const getPosts = async (): Promise<[]> => {
  const response = await fetch(API_URL, { method: 'GET' })
  const data = await response.json()

  return data
}

const Case1: React.SFC<ICase> = ({ location }) => {

  const [posts, setPosts] = React.useState([])
  React.useEffect(() => {
    getPosts().then(data => setPosts(data))
  }, [])

  if (!posts.length) {
    return <Loader />
  }

  return (
    <Content
      title={'Case 1 - Ajax Call'}
      pathname={location.pathname}
    >
    <h1>Ajax Call with loader</h1>
    {
      posts.map(post => (
        <div key={post.id}>
          <h4> {post.title} </h4>
          <p> {post.body} </p>
        </div>
      ))
    }
    </Content>
  )
}

export default Case1
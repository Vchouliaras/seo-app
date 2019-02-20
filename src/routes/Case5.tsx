import * as React from 'react'
import styled from 'styled-components'

import { StyledContent as Content } from '../components/Content'
import { ICase } from '../types'
import * as Theme from '../theme'

// @ts-ignore
import Photo1 from '../assets/photo-hd-1mb.jpg'
// @ts-ignore
import Photo2 from '../assets/photo-hd-2mb.jpg'
// @ts-ignore
import Photo3 from '../assets/photo-hd-3mb.jpg'
// @ts-ignore
import Photo4 from '../assets/photo-hd-2mb-2.jpg'

const Image = styled.img`
  max-width: 100%;
  padding: 10px 0;
  border: 1px solod ${Theme.Colors.grey};
`

const Case5: React.SFC<ICase> = ({ location }) => {

  return (
    <Content
      title={`Case5 - Heavy HTML images`}
      pathname={location.pathname}
    >
      <h1> {'Contains heavy images ~6MB in total'} </h1>
      <p> {'This html page contains heavy images to check for bot timeouts'} </p>
      <Image src={Photo1} alt="Heavy photo" />
      <Image src={Photo2} alt="Heavy photo" />
      <Image src={Photo3} alt="Heavy photo" />
      <Image src={Photo4} alt="Heavy photo" />
    </Content>
  )
}

export default Case5
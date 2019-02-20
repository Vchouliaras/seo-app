import * as React from 'react'
import styled from 'styled-components'

import { Metatags } from './Metatags'
import * as Theme from '../theme'
import { HistoryContext } from '../context'
import { IContent } from '../types'

const Section = styled.section`
  background: ${Theme.Colors.grey};
  font-size: ${Theme.Fonts.medium};
  padding: 15px 10px;
`

const List = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  list-style-type: square;
`

const Content: React.SFC<IContent> = ({title, pathname, children, className}) => {

  const [history, setHistory] = React.useContext(HistoryContext)

  React.useEffect(() => {
    setHistory((history) => [...history, pathname])
  }, [pathname])

  const now = new Date().toUTCString()

  return (
    <main className={className}>
      <Metatags title={title} description={`T:${now} || R:${pathname} || H:${history.join(',')}`} />
      <Section>
        <List>
          <li>{`Title: ${title}`}</li>
          <li>{`Time: ${now}`}</li>
          <li>{`Route: ${pathname}`}</li>
          <li>{`History: ${history.join(',')}`}</li>
        </List>
      </Section>
      { children }
    </main>
  )
}

const StyledContent = styled(Content)`
  padding: 0 10px;
  margin: 25px 0;
  text-align:left;
`

export { StyledContent }
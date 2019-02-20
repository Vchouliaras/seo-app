import * as React from 'react'
import styled from 'styled-components'
import * as Theme from '../theme'

import { ILoader } from '../types'

const Loader: React.SFC<ILoader> = ({className}) => {
  const [time, setTime] = React.useState(1)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={className}>
      <span className="timer"> Loading {time}s </span>
    </div>
  )
}

const StyledLoader = styled(Loader)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: ${Theme.Colors.blue};
  .timer {
    font-size: ${Theme.Fonts.xxlarge};
    color: ${Theme.Colors.white};
  }
`

export { StyledLoader }
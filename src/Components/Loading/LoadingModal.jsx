import React from 'react'
import { LoadingSection } from './styled'

const Loading = ({children}) => {
  return (
    <React.Fragment>
      <LoadingSection>
        <h2>{children}</h2>
      </LoadingSection>
    </React.Fragment>
  )
}

export default Loading

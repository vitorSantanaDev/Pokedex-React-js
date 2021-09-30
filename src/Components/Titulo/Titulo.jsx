import React from 'react'
import { Titulopage } from './styled'

const Titulo = ({text}) => {
  return (
    <React.Fragment>
      <Titulopage>{text}</Titulopage>
    </React.Fragment>
  )
}

export default Titulo

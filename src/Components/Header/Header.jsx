import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import Titulo from '../Titulo/Titulo'
import { HeaderHome } from './styled'

const Header = () => {
  return (
    <React.Fragment>
      <HeaderHome>
        <Titulo text="Pokedex"/>
        <Subtitle text="Digite o número ou o nome do seu pokémon"/>
      </HeaderHome>
    </React.Fragment>
  )
}

export default Header

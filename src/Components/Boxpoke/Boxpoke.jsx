import React from 'react'
import { Boxdiv, Datapoke, Imagepoke } from './styled'

const Boxpoke = ({dados}) => {

  if(dados) {
    return (
    <React.Fragment>
        <Boxdiv>
            <Imagepoke>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dados.id}.png`} alt={dados.name} />
            </Imagepoke>
            <Datapoke>
              <span className="id-poke">{dados.id}°</span>
              <h2 className="name-poke">{dados.name}</h2>
            </Datapoke>          
        </Boxdiv>
      </React.Fragment>
    )
  }
  return null
}

export default Boxpoke

import React from 'react'
import { FormInput } from './styled'

const Input = ({typed, handleChange, handleSubmit}) => {
  return (
    <React.Fragment>
      <FormInput>
        <input type="text" value={typed}onChange={handleChange} placeholder="Buscar Pokemon" required />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </FormInput>
    </React.Fragment>
  )
}

export default Input

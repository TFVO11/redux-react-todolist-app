import React from 'react'
import { ClearInput } from './Input.style'

function Input(props) {
  return (
    <ClearInput name={props.name} {...props.input}/>
  )
}

export default Input

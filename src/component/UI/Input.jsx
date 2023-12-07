import React from 'react'
import { ClearInput } from './Input.style'

function Input(props) {
  return (
    <ClearInput name={props.name} {...props.input} onChange={props.onChange}/>
  )
}

export default Input

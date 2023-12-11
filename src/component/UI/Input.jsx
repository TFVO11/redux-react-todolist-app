import React from 'react'
import { ClearInput } from './Input.style'

function Input(props) {
  return (
    <ClearInput mode={props.mode} name={props.name} {...props.input} onChange={props.onChange}/>
  )
}

export default Input

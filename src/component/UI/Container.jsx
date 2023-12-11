import React from 'react'
import { ContainerBox } from './Container.style'

function Container(props) {
  return (
    <ContainerBox mode={props.mode}>{props.children}</ContainerBox>
  )
}

export default Container

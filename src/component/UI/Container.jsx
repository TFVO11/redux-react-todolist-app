import React, {Fragment} from 'react'
import { ContainerBox } from './Container.style'

function Container(props) {
  return (
    <ContainerBox>{props.children}</ContainerBox>
  )
}

export default Container

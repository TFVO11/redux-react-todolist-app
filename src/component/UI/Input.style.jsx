import style from 'styled-components'
import backgroundType from '../../utill/backgroundType'

export const ClearInput = style.input`
  outline: none;
  
  background: ${(props) => backgroundType(props.mode).input};
  width: 80%;

  border-radius: 5px;
  font-size: 13pt;
`
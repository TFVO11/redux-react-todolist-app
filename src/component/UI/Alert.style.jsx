import styled from "styled-components"
import { overlay } from "./color_type"

export const Alert = styled.div`
  position: absolute;
  top: 3%;
  left: 50%;
  padding: 5px 20px 5px 20px;
  border-radius: 12px;
  opacity: 50%;

  color: ${overlay.backdrop_txt};
  background: ${overlay.backdrop};

  z-index: 40;
`
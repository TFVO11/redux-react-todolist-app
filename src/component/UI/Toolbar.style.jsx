import style from "styled-components"
import { mode_color } from "./color_type"

export const CardDiv = style.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  right: 0px;
  bottom: 0px;

  border: 2px solid white;
  border-radius: 5px;

  background: ${mode_color.card_color};
`

export const BasicButton = style.button`
  color: ${mode_color.basic_button_txt};
  background: ${mode_color.basic_button};
`

export const DarkButton = style.button`
  color: ${mode_color.dark_button_txt};
  background: ${mode_color.dark_button};
`
import React from 'react'
import { basic_color, dark_color } from '../component/UI/color_type'

function backgroundType(type) {
  switch (type) {
    case "base" : {
      return basic_color;
    }

    case "dark" : {
      return dark_color;
    }
  }
}

export default backgroundType

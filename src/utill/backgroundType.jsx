import React from 'react'
import { base_color, sub_color } from '../component/UI/color_type'

function backgroundType(type) {
  switch (type) {
    case "base" : {
      return base_color;
    }

    case "sub" : {
      return sub_color;
    }
  }
}

export default backgroundType

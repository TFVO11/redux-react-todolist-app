import { basic_color, dark_color } from '../component/UI/color_type'

function backgroundType(type) {
  const mode = type.mode;

  switch (mode) {
    case "basic" : {
      return basic_color;
    }

    case "dark" : {
      return dark_color;
    }
  }
}

export default backgroundType

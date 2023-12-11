import React, { Fragment } from 'react'
import { actionUIMode } from '../redux/action/modeAction'


const mode = {
  basic_mode: "basic",
  dark_mode: "dark"
}

function Toolbar() {
  const handleUIMode = (modeFn) => {
    modeFn()
  }

  const modeBasic = () => {
    actionUIMode(mode.basic_mode)
  }

  const modeDark = () => {
    actionUIMode(mode.dark_mode)
  }

  return (
    <Fragment>
      <div>
        <button onClick={() => handleUIMode(modeBasic)}>
          일반 모드
        </button>
        <button onClick={() => handleUIMode(modeDark)}>
          다크 모드
        </button>
      </div>
    </Fragment>
  )
}

export default Toolbar

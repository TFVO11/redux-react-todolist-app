import React from 'react'
import todoListReducer from './todoListReducer'
import uiModeReducer from './uiModeReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todoListReducer,
  uiModeReducer
})

export default rootReducer

import React from 'react'
import { ListBox, ListItem, ListOl } from './List.style'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionRemoveTodoList } from '../redux/action/action'
import { actionCompleteTodoList } from '../redux/action/action'

function List({mode}) {
  const todolist = useSelector(state => state.todoListReducer.list);
  const dispatch = useDispatch();

  const handleClick = (e, callback) => {
      const id = e.target.id;
      callback(id);
  }

  const callbackRemoveDispatch = (id) => {
    dispatch(actionRemoveTodoList(id))
  }
  const callbackCompliteDispatch = (id) => {
    dispatch(actionCompleteTodoList(id))
  }
  
  return (
    <ListBox mode={mode}>
      <ListOl mode={mode}>
      {todolist.length !== 0 ? todolist.map((item, index) => {
          return (
            <ListItem mode={mode} id={item.id} >
              <p>{item.isComplete ? "☆" : index + 1}</p>
              <h4 id={item.id} onClick={(e) => handleClick(e, callbackCompliteDispatch)}>{item.title}</h4>
              <h5>{item.date}</h5>
              <button onClick={(e) => handleClick(e, callbackRemoveDispatch)} id={item.id}>삭제</button>
            </ListItem>
          ) 
        }) : <p>input your to do list!</p>}
      </ListOl>
    </ListBox>
  )
}

export default List

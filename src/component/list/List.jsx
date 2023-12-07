import React from 'react'
import { ListBox } from './List.style'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionRemoveTodoList } from '../redux/action/action'
import { actionCompleteTodoList } from '../redux/action/action'

function List() {
  const todolist = useSelector(state => state.list);
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
    <ListBox>
      <ul>
      {todolist.length !== 0 ? todolist.map(item => {
          return (
            <li id={item.id} onClick={(e) => handleClick(e, callbackCompliteDispatch)}>
              <p>{item.title}</p>
              <p>{item.date}</p>
              <button onClick={(e) => handleClick(e, callbackRemoveDispatch)} id={item.id}>삭제</button>
            </li>
          ) 
        }) : <p>input your to do list!</p>}
      </ul>
    </ListBox>
  )
}

export default List

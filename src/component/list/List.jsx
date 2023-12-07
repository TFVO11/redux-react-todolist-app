import React from 'react'
import { ListBox } from './List.style'

function List() {
  return (
    <ListBox>
      <ul>hello world
        {/* {todolist.map(item => {
          return (
            <li>
              <p>{item.index}</p>
              <p>{item.title}</p>
              <p>{item.date}</p>
              <button id={item.index}>삭제</button>
            </li>
          )
        })} */}
      </ul>
    </ListBox>
  )
}

export default List

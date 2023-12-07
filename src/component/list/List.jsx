import React from 'react'

function List(todolist) {
  return (
    <div>
      <ul>
        {todolist.map(item => {
          return (
            <li>
              <p>{item.index}</p>
              <p>{item.title}</p>
              <p>{item.date}</p>
              <button id={item.index}>삭제</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List

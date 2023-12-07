import React from 'react'

function AddTodoListForm() {
  return (
    <div>
      <form action="submit">
        <div>
          <input type="text" />
          <input type="date" />
          <button>제출</button>
        </div>
      </form>
    </div>
  )
}

export default AddTodoListForm

export const getTodoList = () => ({
  type: "get.todolist"
})

export const addTodoList = (list) => ({
  type: "add.todolist",
  payload: list
})

export const completeTodoList = (id) => ({
  type: "complete.todolist",
  payload: id
})

export const removeTodoList = (id) => ({
  type: "remove.todolist",
  payload: id
})
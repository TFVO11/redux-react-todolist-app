export const getTodoList = () => ({
  type: "get.todolist"
})

export const actionAddTodoList = (list) => ({
  type: "add.todolist",
  payload: list
})

export const actionCompleteTodoList = (id) => ({
  type: "complete.todolist",
  payload: id
})

export const actionRemoveTodoList = (id) => ({
  type: "remove.todolist",
  payload: id
})
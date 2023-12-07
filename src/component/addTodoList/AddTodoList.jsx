import React from 'react'
import AddTodoListForm from './AddTodoListForm'
import { Title, ContentBox } from './AddTodoList.style'

function AddTodoList() {
  return (
    <ContentBox>
      <Title>TO DO LIST</Title>
      <AddTodoListForm />
    </ContentBox>
  )
}

export default AddTodoList

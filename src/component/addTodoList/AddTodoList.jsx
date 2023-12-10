import React, {useState} from 'react'
import AddTodoListForm from './AddTodoListForm'
import { Title, ContentBox } from './AddTodoList.style'
import AlertModal from '../UI/AlertModal'

const initState = {
  visible: false,
  massege: "",
}

function AddTodoList() {
  const [pops, setPops] = useState(initState)


  const handlePops = () => {
    setPops(pre => {
      return {
        ...pre,
        visible: true,
        massege: "Success!"
      }
    })

    setTimeout(() => {
      setPops(initState);
    }, 1500)
  };

  return (
    
    <ContentBox>
      {pops.visible ? <AlertModal>{pops.massege}</AlertModal> : <></>}
      <Title>TO DO LIST</Title>
      <AddTodoListForm onPopup={handlePops}/>
    </ContentBox>
  )
}

export default AddTodoList

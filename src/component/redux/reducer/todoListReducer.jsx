const initState = {
  list : []
};

const todoListReducer = (state=initState, action) => {
  switch (action.type) {

    case "add.todolist": {
      const addtodoList = action.payload;
      const id = Math.random().toString(36);

      
      addtodoList.id = id;
      
      return {
        ...state,
        list: [...state.list, addtodoList]
      }
    }
    case "complete.todolist": {
      const id = action.payload
      const updatedList = state.list.map(item => {
        if (id === item.id) {
          return {
            ...item,
            isComplete: true,
          }
        } else { return item}
      })
      return {
        ...state,
        list: updatedList
      }
    }
    case "remove.todolist" : {
      const id = action.payload;
      const removedList = state.list.filter(list => list.id !== id)

      return {
        ...state,
        list: removedList
      }
    }

    default:
      return state;
  }
  
}

export default todoListReducer;


const initState = {
  list : [
    {
      id: "",
      title: "",
      date: "",
      isComplete: false,
    },
  ]
};

const todoListReducer = (state=initState, action) => {
  switch (action.type) {
    case "get.todolist" : {
      return {
        state
      }
    }

    case "add.todolist": {
      const addtodoList = action.payload.list;
      return {
        ...state,
        list: [...state.list, addtodoList]
      }
    }
    case "complete.todolist": {
      const id = action.payload
      const updatedList = state.list.map(list => {
        if (id === list.id) {
          return {
            ...list.isComplete,
            isComplete: true,
          }
        } else { return list}
      })
      return {
        ...state,
        list: [updatedList]
      }
    }
    case "remove.todolist" : {
      const id = action.payload;
      const removedList = state.list.filter(list => list.id !== id)

      return {
        ...state,
        list: [removedList]
      }
    }

    default:
      return state;
  }
  
}

export default todoListReducer;


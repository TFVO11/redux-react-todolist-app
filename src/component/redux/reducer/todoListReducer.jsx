const initState = {
  list : []
};

const todoListReducer = (state=initState, action) => {
  switch (action.type) {

    case "add.todolist": {
      const addtodoList = action.payload;
      const id = Math.random().toString(36);

      
      addtodoList.id = id;
      console.log("addtodoList", state.list)
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


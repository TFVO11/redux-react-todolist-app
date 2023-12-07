import React, {Fragment} from 'react';
import AddTodoList from "./component/addTodoList/AddTodoList";
import List from "./component/list/List";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoListReducer from "./component/redux/reducer/todoListReducer";
import './App.css'; 

function App() {
  const store = createStore(todoListReducer);
  
  return (
    <Provider>
      <AddTodoList store={store}/>
      <List />
    </Provider>
  )
}

export default App;

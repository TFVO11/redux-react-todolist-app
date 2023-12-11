import React, { Fragment } from "react";
import AddTodoList from "./component/addTodoList/AddTodoList";
import List from "./component/list/List";
import "./App.css";
import Container from "./component/UI/Container";
import Toolbar from "./component/UI/Toolbar";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector(state => state.uiModeReducer);

  return (
    <Container mode={mode}>
      <AddTodoList mode={mode}/>
      <List mode={mode}/>
      <Toolbar mode={mode}/>
    </Container>
  );
}

export default App;

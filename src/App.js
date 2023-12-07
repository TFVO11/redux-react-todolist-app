import React, { Fragment } from "react";
import AddTodoList from "./component/addTodoList/AddTodoList";
import List from "./component/list/List";
import "./App.css";
import Container from "./component/UI/Container";

function App() {

  return (
      <Container>
        <AddTodoList/>
        <List />
      </Container>
  );
}

export default App;

import React, {Fragment} from "react";
import { InputBox, Button, Form } from "./AddTodoList.style";
import Input from "../UI/Input";


function AddTodoListForm() {
  return (
      <Form action="submit">
        <InputBox>
          <Input name="List" input={{type: "text", placeholder: "input your to do list!"}}/>
          <Input  name="Date" input={{type: "date"}}/>
          <Button>제출</Button>
        </InputBox>
      </Form>
  );
}

export default AddTodoListForm;

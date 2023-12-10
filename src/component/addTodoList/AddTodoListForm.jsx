import React, { useState } from "react";
import { InputBox, Button, Form } from "./AddTodoList.style";
import Input from "../UI/Input";
import { useDispatch } from "react-redux";
import { actionAddTodoList } from "../redux/action/action";

const LIST = {
  id: "",
  title: "",
  date: "",
  isComplete: false,
};

function AddTodoListForm(props) {
  const dispatch = useDispatch();
  const [list, setList] = useState(LIST);

  const addTodoList = (e) => {
    e.preventDefault();

    if(list.title !== "" && list.date !== "") {
      dispatch(actionAddTodoList(list))
    } else { console.log("다 적어라")}

    setList(LIST);

  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "List": {
        setList((preState) => {
          return {
            ...preState,
            title: e.target.value,
          };
        });
      }
      break;

      case "Date": {
        setList((preState) => {
          return {
            ...preState,
            date: e.target.value,
          };
        });
      }

      break;
    }
  };

  return (
    <Form action="submit" onSubmit={addTodoList}>
      <InputBox>
        <Input
          onChange={handleChange}
          name="List"
          input={{
            type: "text",
            placeholder: "input your to do list!",
            value: list.title,
          }}
        />
        <Input onChange={handleChange} name="Date" input={{ type: "date", value: list.date} }/>
        <Button onClick={props.onPopup}>제출</Button>
      </InputBox>
    </Form>
  );
}

export default AddTodoListForm;

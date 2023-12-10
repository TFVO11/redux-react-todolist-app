import React, { useState } from "react";
import AddTodoListForm from "./AddTodoListForm";
import { Title, ContentBox } from "./AddTodoList.style";
import AlertModal from "../UI/AlertModal";
import handleListForm from "../../utill/handleListForm";

const initState = {
  visible: false,
  massege: "",
};

function AddTodoList() {
  const [pops, setPops] = useState(initState);

  const listFormValue = (list) => {
    setPops((pre) => {
      return {
        ...pre,
        massege: handleListForm(list),
      };
    });
  };

  const handlePops = () => {
    setPops((pre) => {
      return {
        ...pre,
        visible: true,
      };
    });

    setTimeout(() => {
      setPops(initState);
    }, 1500);
  };

  return (
    <ContentBox>
      {pops.visible ? <AlertModal>{pops.massege}</AlertModal> : <></>}
      <Title>TO DO LIST</Title>
      <AddTodoListForm onPopup={handlePops} onList={listFormValue} />
    </ContentBox>
  );
}

export default AddTodoList;

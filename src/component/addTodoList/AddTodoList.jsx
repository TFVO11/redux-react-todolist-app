import React, { useState } from "react";
import AddTodoListForm from "./AddTodoListForm";
import { Title, ContentBox } from "./AddTodoList.style";
import AlertModal from "../UI/AlertModal";
import handleListForm from "../../utill/handleListForm";
import { useSelector } from "react-redux";

const initState = {
  visible: false,
  massege: "",
};

function AddTodoList() {
  const [pops, setPops] = useState(initState);
  const UI_mode = useSelector(state => state.uiModeReducer);

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
    <ContentBox mode={UI_mode}>
      {pops.visible ? <AlertModal>{pops.massege}</AlertModal> : <></>}
      <Title mode={UI_mode}>TO DO LIST</Title>
      <AddTodoListForm mode={UI_mode} onPopup={handlePops} onList={listFormValue} />
    </ContentBox>
  );
}

export default AddTodoList;

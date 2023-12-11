import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { actionUIMode } from "../redux/action/modeAction";
import { CardDiv, BasicButton, DarkButton } from "./Toolbar.style";
import { useDispatch } from "react-redux";

const mode = {
  basic_mode: "basic",
  dark_mode: "dark",
};

const Overlay = () => {

  const dispatch = useDispatch()

  const handleUIMode = (modeFn) => {
    modeFn();
  };

  const modeBasic = () => {
    dispatch(actionUIMode(mode.basic_mode));
  };

  const modeDark = () => {
    dispatch(actionUIMode(mode.dark_mode));
  };

  return (
    <CardDiv>
      <BasicButton onClick={() => handleUIMode(modeBasic)}>
        일반 모드
      </BasicButton>
      <DarkButton onClick={() => handleUIMode(modeDark)}>다크 모드</DarkButton>
    </CardDiv>
  );
};

const portalElement = document.getElementById("alert");

function Toolbar() {
  return (
    <Fragment>{ReactDOM.createPortal(<Overlay />, portalElement)}</Fragment>
  );
}

export default Toolbar;

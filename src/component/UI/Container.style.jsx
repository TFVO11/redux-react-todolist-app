import style from "styled-components";
import backgroundType from "../../utill/backgroundType";

export const ContainerBox = style.div`
  width: 100%;
  height: 100vh;

  background: ${(props) => backgroundType(props.mode).container};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

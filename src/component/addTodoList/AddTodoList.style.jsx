import style from "styled-components";
import backgroundType from "../../utill/backgroundType";

export const ContentBox = style.div`
  background: ${(props) => backgroundType(props.mode).background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border: 1px solid black;
  border-radius: 12px;
 
  padding: 12px;

  width: 50%;


`;

export const Title = style.div`
  background: ${(props) => backgroundType(props.mode).title};
  color: ${(props) => backgroundType(props.mode).title_txt};
  width: 50%;

  text-align: center;
  font-size: 30px;
  font-weight: bold;

  border-radius: 30px;
  border: 2px solid black;
  -webkit-text-stroke: 1px black;
`;

export const InputBox = style.div`
  background: ${(props) => backgroundType(props.mode).inputbox};

  width: 90%;
  padding: 10px;

  margin-top: 12px;

  display: flex;
  justify-content: space-between;

  border-radius: 5px;
  border: 1px solid black;
`

export const Button = style.button`
  border: none;
  border-radius: 5px;
  background: ${(props) => backgroundType(props.mode).button};

  color: ${(props) => backgroundType(props.mode).button_txt};
  font-size: 25px;
  font-weight: bold;
  -webkit-text-stroke: 0.2px black;

  cursor: pointer;

  margin-left: 12px;

  &:hover {
    background: ${(props) => backgroundType(props.mode).button_hover};
  }
`

export const Form = style.form`
  width: 70%;
  display: flex;
  justify-content: center;
`
import style from "styled-components";
import { basic_color } from "../UI/color_type";

export const ContentBox = style.div`
  background: ${basic_color.background};
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
  background: ${basic_color.title};
  color: ${basic_color.title_txt};
  width: 50%;

  text-align: center;
  font-size: 30px;
  font-weight: bold;

  border-radius: 30px;
  border: 2px solid black;
  -webkit-text-stroke: 1px black;
`;

export const InputBox = style.div`
  background: ${basic_color.inputbox};

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
  background: ${basic_color.button};

  color: ${basic_color.button_txt};
  font-size: 25px;
  font-weight: bold;
  -webkit-text-stroke: 0.2px black;

  cursor: pointer;

  margin-left: 12px;

  &:hover {
    background: ${basic_color.button_hover};
  }
`

export const Form = style.form`
  width: 70%;
  display: flex;
  justify-content: center;
`
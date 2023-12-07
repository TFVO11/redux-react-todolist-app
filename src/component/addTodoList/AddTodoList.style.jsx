import style from "styled-components";
import Content from "../UI/Content";
import Input from "../UI/Input";

export const ContentBox = style.div`
  background: #886f50;
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
  background: #364679;
  color: #FEE601;
  width: 50%;

  text-align: center;
  font-size: 30px;
  font-weight: bold;

  border-radius: 30px;
  border: 2px solid black;
  -webkit-text-stroke: 1px black;
`;

export const InputBox = style.div`
  background: #494039;

  width: 100%;
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
  background: #b08e68;

  color: #d7d1d1;
  font-size: 25px;
  font-weight: bold;
  -webkit-text-stroke: 0.2px black;

  cursor: pointer;

  margin-left: 12px;

  &:hover {
    background: #b08e90;
  }
`

export const Form = style.form`
  width: 70%;
`
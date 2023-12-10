import style from 'styled-components'

export const ListBox = style.div`
  background: #6e77c6;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  
  border: 1px solid black;
  border-radius: 12px;
 
  padding: 12px;

  width: 50%;
  height: 60%;

  margin-top: 12px;

  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ListOl = style.ol`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  padding: 0px;

  & > p {
    text-align: center;
  }
`

export const ListItem = style.li`
  display: flex;
  justify-content: space-between;
  align-item: center;

  margin-bottom: 12px;



  background: #f5f5f5;

  border-radius: 10px;
  border: 1px solid black;

  & > p {
    margin-left: 10px;
    margin-top: 20.28px;
  }

  & > h4 {
    width: 50%;
    text-align: center;
  }

  & > h5 {
    width: 30%;
    text-align: center;

  }

  & > button {
    border: none;
    border-radius: 0px 10px 10px 0px;

    cursor: pointer;

    &:hover {
      background: red;
    }
  }

`
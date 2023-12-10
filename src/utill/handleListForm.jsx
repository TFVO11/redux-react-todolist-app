const handleListForm = (form) => {
  if (form.title === "") {
    return "내용을 입력하세요!"
  } else if (form.date === "") {
    return "날짜를 입력하세요!"
  } else { return "성공!"}
}

export default handleListForm;
import todo from "../img/todo.png"
import done from "../img/done.png"
import { useState } from "react";

const TodoListItem = ({item, checked}) => {

  const [check, setCheck] = useState(checked)

  const checkButton = () => {
    if (check === true) {
      setCheck(false)
    } else {
      setCheck(true)
    }
  }

  return (
    <div className="list-content">
      <div className="list-content-text">
        {item}
      </div>
      <div className="list-content-checkbox">
        {/* 리스트마다 포스트로 체크 넣어줘야함 리스트.check로 불러오기*/}
        {check === true 
          ? <img onClick={checkButton} src={done} alt="완료"/> 
          : <img onClick={checkButton} src={todo} alt="미완료"/>
        }
      </div>
    </div>
  )
}

export default TodoListItem;
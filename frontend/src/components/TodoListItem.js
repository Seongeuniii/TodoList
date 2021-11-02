import todoimg from "../img/todoimg.png"
import doneimg from "../img/doneimg.png"
import { useState } from "react";

const TodoListItem = ({todo}) => {

  const { text, checked } = todo
  const [check, setCheck] = useState(checked)

  const checkButton = () => {
    if (checked === true) {
      setCheck(false)
    } else {
      setCheck(true)
    }
  }

  return (
    <div className="list-content">
      <div className="list-content-text">{text}</div>
      <div className="list-content-checkbox">
        {check === true 
          ? <img onClick={checkButton} src={doneimg} alt="완료"/> 
          : <img onClick={checkButton} src={todoimg} alt="미완료"/>
        }
      </div>
    </div>
  )
}

export default TodoListItem;
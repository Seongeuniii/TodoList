import { useState } from "react";
import styled from "styled-components";
import AddList from "./AddList";
import todo from "../img/todo.png"
import done from "../img/done.png"


const TodoWrapper = styled.div`
  width:100%;
  height:100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .day-info-container {
    width: 80%;
    height: 100px;
    // background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .day-info-left {
    width: 70%;
    display: flex;
  }

  .day {
    font-size: 2.4rem;
    font-weight: 570;
  }

  .day-info-left-inner {
    font-size: 0.7rem;
    margin-top: 13px;
    margin-left: 3px;
    
  }

  .day-info-right {
    width: 30%;
    font-size: 0.9rem; 
    text-align: right;
  }

  .list-content-container {
    width: 100%;
    height: 500px;
    // background: skyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    // justify-content: center;
  }

  .list-content {
    width: 80%;
    height: 60px;
    background:white;
    font-size: 1rem;
    display: flex;
  }
  
  .list-content-text {
    width: 100%;
  }

  .list-content-checkbox {
    float: right;
    img {
      width: 20px;
      height: 20px;
    }
  }
`

const TodoList = () => {
  const datas = [
    'Buy new sweatshirt',
    'Begin promotional phase',
    'Read and article',
    'Try not to fall asleep',
    "Watch 'Sherlock'",
    "Begin QA for the product",
    "Go for a walk"
  ]

  const [check, setCheck] = useState(true)

  const checkButton = () => {
    if (check === true) {
      setCheck(false)
    } else {
      setCheck(true)
    }
  }

  return(
    <>
      <TodoWrapper>
        <div className="day-info-container">
          <div className="day-info-left">
            <div className="day">13</div>
            <div className="day-info-left-inner">
              <div className="month">OCT</div>
              <div className="year">2021</div>
            </div>
          </div>
          <div className="day-info-right">THURSDAY</div>
        </div>

        <div className="list-content-container">
          {datas.map((data) => {
            return(
              <div className="list-content">
                <div className="list-content-text">
                  {data}
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
          })}
        </div>
      </TodoWrapper>
      <AddList/>
    </>
  )
}

export default TodoList;
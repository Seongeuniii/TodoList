import styled from "styled-components";
import AddList from "./AddList";
import TodoListItem from "./TodoListItem";

const TodoWrapper = styled.div`
  width: 330px;
  height: 600px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .day-info-container {
    width: 80%;
    height: 100px;
    margin-top: 15px;
    // background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    position: static;
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

const TodoList = ({datas}) => {

  

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
          <AddList/>
        </div>
        <div className="list-content-container">
          {datas && datas.map((data) => {
            return(
              <TodoListItem key={data.id} item={data.text} checked={data.checked}/>
            ) 
          })}
        </div>
      </TodoWrapper>
    </>
  )
}

export default TodoList;
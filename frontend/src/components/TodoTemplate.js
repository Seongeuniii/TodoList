import styled from "styled-components";

const TodoWrapper = styled.div`
  width: 240px;
  height: 420px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .day-info-container {
    width: 80%;
    height: 60px;
    // margin-top: 15px;
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
    font-size: 1.7rem;
    font-weight: 570;
  }

  .day-info-left-inner {
    font-size: 0.1rem;
    margin-top: 4px;
    margin-left: 3px;
    
  }

  .day-info-right {
    width: 30%;
    font-size: 0.4rem; 
    text-align: right;
  }

  .list-content-container {
    width: 100%;
    height: 280px;
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
    font-size: 0.7rem;
    display: flex;
  }
  
  .list-content-text {
    width: 100%;
  }

  .list-content-checkbox {
    float: right;
    img {
      width: 13px;
      height: 13px;
    }
  }
`

const TodoTemplate = ({children}) => {

  return(
    <TodoWrapper>{children}</TodoWrapper>
  )
}

export default TodoTemplate;
import styled from "styled-components";
import left from "../img/left.png"
import right from "../img/right.png"
import SelectDate from "./SelectDate";

const Wrapper = styled.div`
  width: 380px;
  height: 340px;
  background: white;
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .month {
    font-size: 1.2rem;
    margin-top: 27px;
    margin-bottom: 10px;
    img {
      width: 13px;
    }
    span{
      margin: 10px;
    }
  }

  .dayname {
    padding-bottom: 8px;
    margin-bottom: 10px;
    display: flex;
    border-bottom: 1px solid black;
    div {
      width: 50px;
    }
    
  }
  .dates {
    margin-top: 7px;
    display: grid;
    grid-template-columns: repeat(7, 50px);
    grid-template-rows: repeat(5, 50px);

    .selecteddate {
      border-radius: 50%;
      // margin: 10px;
      background:black;
      color: white;
    }
  }
`

const Calender = () => {
  const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  
  return(
    <Wrapper>
        <div className="month">
          <img src={left} alt="왼쪽"/>
          <span>10</span>
          <img src={right} alt="오른쪽"/>
        </div>
        <div className="dayname">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="dates">
          {dates.map(date => {
            return <SelectDate date={date}/>
          })
          }
        </div>
    </Wrapper>
  )
}

export default Calender;
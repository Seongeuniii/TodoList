import styled from "styled-components";
import left from "../img/left.png"
import right from "../img/right.png"
import SelectDate from "./SelectDate";
import dayjs from 'dayjs';
import { useState } from "react";

const Wrapper = styled.div`
  width: 380px;
  height: 420px;
  background: white;
  text-align: center;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: rgb(212, 205, 195) solid 1px;
  .calenderheader {
    margin-top: 20px;
    height: 100px;
  }

  .month {
    font-size: 1.4rem;
    margin-top: 5px;
    margin-bottom: 20px;
    img {
      width: 13px;
      cursor: pointer; 
    }
    span{
      margin: 10px;
    }
    
  }
  .dayname {
    padding-bottom: 8px;
    margin-bottom: 10px;
    display: flex;
    border-bottom: 1px solid gray;
    div {
      width: 50px;
    }
  }
  .dates {
    margin-top: 7px;
    display: grid;
    height: 300px;
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

  const daynamelist = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const [showMonth, setShowMonth] = useState(dayjs())
  console.log(showMonth)
  const funcDates = (showMonth) =>{
    return [...Array(daynamelist.indexOf(showMonth.format('ddd')))].concat([...Array(showMonth.daysInMonth())].map((v,i) => i+1))
  }

  const [dates, setDates] = useState(funcDates(showMonth))
 
  const prevMonth = () => {
    setShowMonth(showMonth.subtract(1, 'month'))
    setDates(funcDates(showMonth))
  }

  const nextMonth = () => {
    setShowMonth(showMonth.add(1, 'month'))
    setDates(funcDates(showMonth))
  }

  return(
    <Wrapper>
        <div className="calenderheader">
          <div className="year">{showMonth.format("YYYY")}</div>
          <div className="month">
            <img src={left} alt="left" onClick={prevMonth}/>
            <span>{showMonth.format("MM")}</span>
            <img src={right} alt="right" onClick={nextMonth}/>
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
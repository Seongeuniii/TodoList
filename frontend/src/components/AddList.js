import styled from 'styled-components'
import plus from '../img/plusbutton.png'
import Axios from 'axios';

const ScheduleButton = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 525px;
  cursor: pointer;
`

const AddList = () => {


  const addSchedule = () => {
    const newSchedule = prompt('새로운 일정을 입력하세요')
    if (newSchedule) {
      Axios.post('http://localhost:5000',{ newSchedule })
      .then((response) => {
          console.log(response)  
      }).catch((error) => {
          console.log(error)
      })
    }
  }


  return(
    <ScheduleButton onClick={addSchedule} src={plus} alt="일정추가"></ScheduleButton>
  )

}

export default AddList
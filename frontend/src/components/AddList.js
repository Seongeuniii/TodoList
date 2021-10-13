import styled from 'styled-components'
import plus from '../img/plusbutton.png'

const ScheduleButton = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 750px;
  cursor: pointer;
`

const AddList = () => {


  const addSchedule = () => {
    const newSchedule = prompt('새로운 일정을 입력하세요')
    console.log(newSchedule)
  }


  return(
    <ScheduleButton onClick={addSchedule} src={plus} alt="일정추가"></ScheduleButton>
  )

}

export default AddList
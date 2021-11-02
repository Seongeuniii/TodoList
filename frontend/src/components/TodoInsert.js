import styled from 'styled-components'
import plus from '../img/plusbutton.png'
import Axios from 'axios';
import { useState } from 'react';

const AddButton = styled.img`
  width: 45px;
  height: 45px;
  position: absolute;
  top: 525px;
  cursor: pointer;
`

// 여기서 input 상태관리하고, app 컴포넌트에는 todos 배열에 새로운 객체를 추가하는 함수를 만들어야함
const TodoInsert = () => {

  const [value, setValue] = useState('');

  // const addSchedule = () => {
  //   const newSchedule = prompt('새로운 일정을 입력하세요')
  //   if (newSchedule) {
  //     Axios.post('http://localhost:5000',{ newSchedule })
  //     .then((response) => {
  //         console.log(response)  
  //     }).catch((error) => {
  //         console.log(error)
  //     })
  //   }
  // }

  const addSchedule = () => {
    setValue(prompt('새로운 일정을 입력하세요'));
  }


  return(
    <AddButton onClick={addSchedule} src={plus} alt="일정추가"></AddButton>
  )

}

export default TodoInsert;